function ConfirmDelete({ isOpen, onClose, itemName, onConfirm }) {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/50 p-4">

            
            <div className="w-full max-w-sm sm:max-w-md rounded-xl bg-zinc-100 p-5 sm:p-8 text-center shadow-2xl">

                <div className="flex flex-col items-center gap-6">

                    <p className="text-lg sm:text-xl font-bold text-red-500">
                        CONFIRM DELETION
                    </p>

                    <p className="text-sm sm:text-base text-gray-700 break-words">
                        Are you sure you want to delete{" "}
                        <span className="text-red-500 font-bold italic">
                            {itemName}
                        </span>?
                    </p>

                    
                    <div className="flex w-full flex-col gap-3 sm:flex-row sm:justify-center">

                        <button
                            onClick={onConfirm}
                            className="w-full sm:w-auto cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition"
                        >
                            CONFIRM
                        </button>

                        <button
                            onClick={onClose}
                            className="w-full sm:w-auto cursor-pointer bg-gray-500 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition"
                        >
                            CANCEL
                        </button>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default ConfirmDelete;