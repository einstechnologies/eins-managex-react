// src/components/UserCardSkeleton.tsx
const UserSearchSkeleton = () => (
    <div
        className="d-flex align-items-center gap-3 p-3 border rounded mb-2"
        style={{ overflow: "hidden" }}
    >
        {/* Avatar circle */}
        <div
            className="skeleton-box skeleton-avatar-circle-dimension skeleton-circle flex-shrink-0"
        />

        {/* Text lines */}
        <div className="flex-grow-1 d-flex flex-column gap-2">
            {/* Full name */}
            <div className="skeleton-box fullname-skeleton-box" />
            {/* Email */}
            <div className="skeleton-box email " />
            {/* Meta row — phone, gender, bio id */}
            <div className="d-flex gap-2">
                <div className="skeleton-box smallFirst" />
                <div className="skeleton-box smallSecond" />
                <div className="skeleton-box smallThird" />
            </div>
        </div>

        {/* Badge */}
        <div
            className="skeleton-box skeleton-pill flex-shrink-0 editDelete"

        />
    </div>
);

export default UserSearchSkeleton;
