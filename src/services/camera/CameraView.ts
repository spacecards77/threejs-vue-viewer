export const CameraView = {
    Isometric: 0,
    XDirection: 1,
    YDirection: 2,
    ZDirection: 3,
    ReverseXDirection: 4,
    ReverseYDirection: 5,
    ReverseZDirection: 6
} as const;

export type CameraView = (typeof CameraView)[keyof typeof CameraView];

