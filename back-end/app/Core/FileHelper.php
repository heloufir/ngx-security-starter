<?php

namespace App\Core;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
use Symfony\Component\HttpFoundation\BinaryFileResponse;

trait FileHelper
{

    /**
     * Upload a file
     *
     * @param UploadedFile $file The file object
     * @param string $path The file's path
     * @param string|null $filename The file name if it exists
     *
     * @return null|string NULL if the file object is NULL, or the filename if the file is uploaded
     *
     * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
     */
    function upload(UploadedFile $file, string $path, string $filename = null)
    {
        if ($file == null) {
            Log::error('The file object cannot be null');
            return null;
        }
        $extension = $file->getClientOriginalExtension();
        if ($filename == null) {
            $filename = uniqid() . "." . $extension;
        } else {
            $filenameParts = explode('/', $filename);
            $filename = $filenameParts[sizeof($filenameParts) - 1];
        }
        $file->move($path, $filename);
        return $filename;
    }

    /**
     * Download a file based on it's path
     *
     * @param string $path The file's path
     * @param string $filename The file's name
     *
     * @return JsonResponse|BinaryFileResponse A response containing the errors list or the file binary object
     *
     * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
     */
    function download(string $path, string $filename)
    {
        if ($path == null) {
            Log::error('The path cannot be null to download file from server');
            return response()->json(['status' => 'error', 'message' => 'The path cannot be null to download file from server']);
        }
        return response()->download($path . '/' . $filename, $filename, ['Content-Type : ' . $this->getMimeType($path . '/' . $filename)]);
    }

    /**
     * Get a file mime type
     *
     * @param string $fullPath The file's full path
     *
     * @return string The file's path
     *
     * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
     */
    function getMimeType(string $fullPath)
    {
        return File::mimeType($fullPath);
    }

}