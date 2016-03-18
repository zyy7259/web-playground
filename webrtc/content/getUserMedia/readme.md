# getUserMedia needs https or localhost

getUserMedia() must be used on a server, not the local file system, otherwise a PERMISSION_DENIED: 1 error will be thrown.

getUserMedia() no longer works on insecure origins. To use this feature, you should consider switching your application to a secure origin, such as HTTPS. See https://goo.gl/rStTGz for more details.
    navigator.getUserMedia error: NavigatorUserMediaError
    message: "Only secure origins are allowed (see: https://goo.gl/Y0ZkNV)."
    name: "PermissionDeniedError"

# MediaStreamTrack.getSources is deprecated.

See https://www.chromestatus.com/feature/4765305641369600 for more details.
