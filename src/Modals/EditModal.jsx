
import { useEffect, useState } from "react";

function UpdateModal({ isOpen, onClose, itemName, onSave }) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [profile, setProfile] = useState('');

    useEffect(() => {
        if (itemName) {
            setName(itemName.name || '');
            setAge(itemName.age || '');
            setAddress(itemName.address || '');
            setProfile(itemName.profile || '');
        }
    }, [itemName]);

    const handleUpdate = () => {
        onSave({
            ...itemName,
            name,
            age,
            address,
            profile
        });
    };

    if (!isOpen) return null;

    return (
        <>

            <div
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>


            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">

                <div className="w-full max-w-md max-h-[90vh] overflow-y-auto rounded-xl bg-zinc-100 p-5 sm:p-8 shadow-2xl">


                    <div className="mb-6 text-center">

                        <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
                            Update Student
                        </h2>

                        <p className="text-sm text-gray-500 mt-1">
                            Edit the student's information below.
                        </p>

                    </div>


                    <div className="flex flex-col gap-4 w-full">


                        <div className="flex flex-col items-start w-full">

                            <label className="text-sm italic text-red-500 mb-1">
                                Name
                            </label>

                            <input
                                type="text"
                                className="border border-gray-300 rounded-md w-full outline-none py-2 px-4 focus:ring-2 focus:ring-red-400"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Enter student name"
                            />

                        </div>

                        <div className="flex flex-col items-start w-full">

                            <label className="text-sm italic text-red-500 mb-1">
                                Age
                            </label>

                            <input
                                type="number"
                                className="border border-gray-300 rounded-md w-full outline-none py-2 px-4 focus:ring-2 focus:ring-red-400"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                placeholder="Enter student age"
                            />

                        </div>


                        <div className="flex flex-col items-start w-full">

                            <label className="text-sm italic text-red-500 mb-1">
                                Address
                            </label>

                            <input
                                type="text"
                                className="border border-gray-300 rounded-md w-full outline-none py-2 px-4 focus:ring-2 focus:ring-red-400"
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                placeholder="Enter student address"
                            />

                        </div>


                        <div className="flex flex-col items-start w-full">

                            <label className="text-sm italic text-red-500 mb-1">
                                Profile URL
                            </label>

                            <input
                                type="text"
                                className="border border-gray-300 rounded-md w-full outline-none py-2 px-4 focus:ring-2 focus:ring-red-400"
                                value={profile}
                                onChange={(e) => setProfile(e.target.value)}
                                placeholder="Enter profile image URL"
                            />

                        </div>

                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col-reverse sm:flex-row gap-3 mt-7 w-full">

                        <button
                            onClick={onClose}
                            className="w-full sm:w-1/2 cursor-pointer bg-gray-500 hover:bg-gray-700 text-white font-bold py-2.5 px-4 rounded-md duration-200"
                        >
                            CANCEL
                        </button>

                        <button
                            onClick={handleUpdate}
                            className="w-full sm:w-1/2 cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2.5 px-4 rounded-md duration-200"
                        >
                            UPDATE
                        </button>

                    </div>

                </div>

            </div>
        </>
    );
}

export default UpdateModal;
