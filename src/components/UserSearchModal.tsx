import { type UserSearchModalProp } from "../ts";
import UserSearchSkeleton from "./UserSearchSkeleton";


const UserSearchModal = ({ showModal, onClose, filters, setFilters, users, isLoading, isError, editClick, handleReset, handleSearch }: UserSearchModalProp) => {


    if (!showModal) return null;

    const API_URL = window.__APP_CONFIG__?.API_URL;

    return (
        <>
            {/* Backdrop */}
            <div className="modal-backdrop fade show" onClick={onClose} />

            {/* Modal */}
            <div
                className="modal fade show d-flex align-items-center"
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                style={{ zIndex: 1050, display: "flex !important" }}
            >
                <div
                    className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable w-100"
                    role="document"
                >
                    <div className="modal-content">

                        {/* Header */}
                        <div className="modal-header">
                            <h5 className="modal-title fw-semibold">Users Search</h5>
                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                                aria-label="Close"
                            />
                        </div>

                        {/* Filter Bar */}
                        <div className="px-3 pt-3 pb-2 border-bottom">

                            {/* Row 1 */}
                            <div className="user-search-modal-user input-modal-row">
                                <div className="user-search-modal-user input-modal-col">
                                    <fieldset className="text-input-group">
                                        <label htmlFor="biouserid">User Id</label>
                                        <input
                                            id="biouserid"
                                            type="text"
                                            value={filters.bioUserId}
                                            onKeyDown={(e) => {
                                                const allowed = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
                                                if (!/[0-9]/.test(e.key) && !allowed.includes(e.key)) {
                                                    e.preventDefault();
                                                }
                                            }}
                                            onChange={(e) => setFilters((f) => ({ ...f, bioUserId: e.target.value }))}
                                        />
                                    </fieldset>
                                </div>

                                <div className="user-search-modal-user input-modal-col">
                                    <fieldset className="text-input-group">
                                        <label htmlFor="firstName">First Name</label>
                                        <input
                                            id="firstName"
                                            type="text"
                                            value={filters.firstName}
                                            onChange={(e) => setFilters((f) => ({ ...f, firstName: e.target.value }))}
                                        />
                                    </fieldset>
                                </div>
                            </div>

                            {/* Row 2 */}
                            <div className="user-search-modal-user input-modal-row">
                                <div className="user-search-modal-user input-modal-col">
                                    <fieldset className="text-input-group">
                                        <label htmlFor="lastName">Last Name</label>
                                        <input
                                            id="lastName"
                                            type="text"
                                            value={filters.lastName}
                                            onChange={(e) => setFilters((f) => ({ ...f, lastName: e.target.value }))}
                                        />
                                    </fieldset>
                                </div>

                                <div className="user-search-modal-user input-modal-col input-modal-btn-col">
                                    <button className="btn-outline-soft-green" onClick={handleSearch}>Search</button>
                                    <button className="btn-outline-soft-red" onClick={handleReset}>Cancel</button>
                                </div>
                            </div>

                        </div>


                        {/* Body — User Cards */}
                        <div className="modal-body">
                            {isError && (
                                <div className="alert alert-danger py-2 small">
                                    Failed to load users. Please try again.
                                </div>
                            )}

                            {isLoading ? (
                                Array.from({ length: 6 }).map((_, i) => (
                                    <UserSearchSkeleton key={i} />
                                ))
                            ) : users?.length === 0 ? (
                                <div className="text-center text-muted py-5">
                                    No users found.
                                </div>
                            ) : (
                                users?.map((user) => (
                                    <div
                                        key={user.bioUserId}
                                        className="d-flex align-items-center gap-3 p-3 border rounded mb-2"
                                    >
                                        {/* Avatar */}
                                        {user.filePath ? (
                                            <img
                                                src={`${API_URL}/${user.filePath}`}
                                                alt={user.userFirstName}
                                                className="rounded-circle object-fit-cover bg-light user-search-modal-user image-size"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).style.display = "none";
                                                }}
                                            />
                                        ) : (
                                            <div
                                                className="rounded-circle  d-flex align-items-center justify-content-center flex-shrink-0 user-search-modal-user circleAvatar-bgcolor-size">
                                                <i className="bi bi-person-fill text-black" style={{ fontSize: 26 }} />
                                            </div>
                                        )}

                                        {/* Info */}
                                        <div className="flex-grow-1 overflow-hidden">
                                            <p className="mb-0 fw-semibold text-truncate">
                                                {user.userFirstName} {user.userLastName}
                                            </p>
                                            <div className="d-flex gap-3 text-muted" style={{ fontSize: 13 }}>
                                                <span className="fw-semibold">User ID : {user.bioUserId}</span>
                                            </div>
                                            <span
                                                className={`badge rounded-pill ${user.userType ? "bg-success" : "bg-secondary"
                                                    }`}
                                            >
                                                {user.userType ? "Admin" : "Normal User"}
                                            </span>

                                        </div>

                                        {/* Badge */}
                                        <div className="d-flex gap-4">

                                            <i className="bi bi-pencil-square user-search-modal-user icon-edit-delete" title="Edit" onClick={() => { editClick(user) }} ></i>
                                            <i className="bi bi-trash3 user-search-modal-user icon-edit-delete" title="Delete"></i>
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>

                        {/* Footer */}
                        <div className="modal-footer">
                            <button className="btn btn-secondary btn-sm me-auto" onClick={onClose}>
                                Close
                            </button>
                            <span className="text-muted small ">
                                {!isLoading && `${users?.length ?? 0} user(s) found`}
                            </span>
                        </div>

                    </div>
                </div>
            </div >
        </>
    );

};

export default UserSearchModal;