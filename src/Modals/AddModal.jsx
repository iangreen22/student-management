
import { useEffect, useState } from "react";

function AddModal({ isOpen, onClose, onSave }) {

    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [profile, setProfile] = useState('');

    
    useEffect(() => {
        if (isOpen) {
            setName('');
            setAge('');
            setAddress('');
            setProfile('');
        }
    }, [isOpen]);

    const handleSave = () => {

        const newStudent = {
            name: name.trim(),
            age: age.trim(),
            address: address.trim(),
            profile: profile.trim()
        };


        if (!newStudent.name || !newStudent.age || !newStudent.address || !newStudent.profile) {
            alert("Please fill in all required fields.");
            return;
        }

        onSave(newStudent);
    };

    if (!isOpen) return null;

    return (
        <>
            
            <div
                className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            ></div>

            
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">

               
                <div className="w-full max-w-md max-h-[90vh] overflow-y-auto bg-gray-50 p-5 sm:p-8 rounded-xl shadow-2xl">

                    
                    <div className="text-center mb-6">

                        <p className="font-bold text-xl sm:text-2xl text-red-500">
                            Add Student
                        </p>

                        <p className="text-gray-500 text-xs sm:text-sm mt-1">
                            Fill in the student's information below.
                        </p>

                    </div>

                    
                    <div className="w-full flex flex-col gap-4">

                        
                        <div className="w-full">
                            <label className="text-sm font-semibold block mb-1">
                                Name *
                            </label>

                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border border-gray-300 rounded-md outline-none w-full py-2.5 px-4 focus:ring-2 focus:ring-blue-400"
                                type="text"
                                placeholder="Enter Name"
                            />
                        </div>

                       
                        <div className="w-full">
                            <label className="text-sm font-semibold block mb-1">
                                Age *
                            </label>

                            <input
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                className="border border-gray-300 rounded-md outline-none w-full py-2.5 px-4 focus:ring-2 focus:ring-blue-400"
                                type="number"
                                min="1"
                                placeholder="Enter Age"
                            />
                        </div>

                       
                        <div className="w-full">
                            <label className="text-sm font-semibold block mb-1">
                                Address *
                            </label>

                            <input
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                className="border border-gray-300 rounded-md outline-none w-full py-2.5 px-4 focus:ring-2 focus:ring-blue-400"
                                type="text"
                                placeholder="Enter Address"
                            />
                        </div>

                       
                        <div className="w-full">
                            <label className="text-sm font-semibold block mb-1">
                                Profile URL *
                            </label>

                            <input
                                value={profile}
                                onChange={(e) => setProfile(e.target.value)}
                                className="border border-gray-300 rounded-md outline-none w-full py-2.5 px-4 focus:ring-2 focus:ring-blue-400"
                                type="url"
                                placeholder="Paste Profile Image URL"
                            />
                        </div>

                    </div>

                   
                    <div className="flex flex-col-reverse sm:flex-row gap-3 w-full mt-7">

                        <button
                            onClick={onClose}
                            className="w-full sm:w-1/2 bg-red-500 hover:bg-red-400 text-white cursor-pointer py-2.5 rounded-md font-semibold duration-200"
                        >
                            CANCEL
                        </button>

                        <button
                            onClick={handleSave}
                            className="w-full sm:w-1/2 bg-blue-500 hover:bg-blue-400 text-white cursor-pointer py-2.5 rounded-md font-semibold duration-200"
                        >
                            ADD
                        </button>

                    </div>

                </div>

            </div>
        </>
    );
}

export default AddModal;
