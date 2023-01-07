import React from 'react';

const Create = () => {
    return (
        <div className="
                        flex flex-col justify-center bg-[#fff] items-center w-11/12 mx-auto mt-3
            rounded-3xl shadow-2xl shadow-[#ed3c00] overflow-y-auto
            {/*h-5/6 */}
        ">
            <div className="w-full h-full bg-[#e6e7e9]
            flex flex-col justify-center items-center p-5
        ">
                <p className="
                    text-3xl font-bold text-[#fe7700] mt-3
                ">
                    Create New NFT Item
                </p>
            <form action="" className="
                flex flex-col items-center justify-center
                w-full h-full p-4 space-y-4 text-center
            ">
                <div className="
                    flex flex-col items-center justify-center
                    w-full h-full p-4 space-y-4 text-center
                ">
                    <label htmlFor="name" className="
                        text-xl font-semibold text-gray-700
                    ">Name</label>
                    <input type="text" name="name" id="name" className="
                        w-1/2 px-4 py-2 text-gray-700 bg-white rounded-lg
                    " placeholder="Item name"/>
                </div>
                <div className="
                    flex flex-col items-center justify-center
                    w-full h-full p-4 space-y-4 text-center
                ">
                    <label htmlFor="description" className="
                        text-xl font-semibold text-gray-700
                    ">Description</label>
                    <textarea name="description" id="description" cols="30" rows="5" className="
                        w-1/2 px-4 py-2 text-gray-700 bg-white rounded-lg resize-none
                    " placeholder="Provide a detailed description of your item."></textarea>
                </div>
                <div className="
                    flex flex-col items-center justify-center
                    w-full h-full p-4 space-y-4 text-center
                ">
                    <label htmlFor="collection" className="
                        text-xl font-semibold text-gray-700
                    ">Collection</label>
                    <input type="text" name="collection" id="collection" className="
                        w-1/2 px-4 py-2 text-gray-700 bg-white rounded-lg
                    " placeholder="Collection where your item will appear"/>
                </div>
                <div className="
                    flex flex-col items-center justify-center
                    w-full h-full p-4 space-y-4 text-center
                ">
                    <label htmlFor="price" className="
                        text-xl font-semibold text-gray-700
                    ">Price</label>
                    <input type="number" name="price" id="price" className="
                        w-1/2 px-4 py-2 text-gray-700 bg-white rounded-lg
                    " placeholder="Item price in ethereum"/>
                </div>
                <div className="
                    flex flex-col items-center justify-center
                    w-full h-full p-4 space-y-4 text-center
                ">
                    <label htmlFor="image" className="
                        text-xl font-semibold text-gray-700
                    ">Image URL</label>
                    <input type="text" name="image" id="image" className="
                        w-1/2 px-4 py-2 text-gray-700 bg-white rounded-lg
                    " placeholder="Item image URL"/>
                </div>
                <div className="
                    flex flex-col items-center justify-center
                    w-full h-full p-4 space-y-4 text-center
                ">
                    <label htmlFor="category" className="
                        text-xl font-semibold text-gray-700
                    ">Category</label>
                    <select name="category" id="category" className="
                        w-1/2 px-4 py-2 text-gray-700 bg-white rounded-lg
                    ">
                        <option value="1">Category 1</option>
                        <option value="2">Category 2</option>
                        <option value="3">Category 3</option>
                    </select>
                </div>
                <div className="
                    flex flex-col items-center justify-center
                    w-full h-full p-4 space-y-4 text-center
                ">
                    <label htmlFor="blockchain" className="
                        text-xl font-semibold text-gray-700
                    ">Blockchain</label>
                    <select name="blockchain" id="blockchain" className="
                        w-1/2 px-4 py-2 text-gray-700 bg-white rounded-lg
                    ">
                        <option value="1">Blockchain 1</option>
                        <option value="2">Blockchain 2</option>
                        <option value="3">Blockchain 3</option>
                    </select>
                </div>
                <button className="
                    w-1/2 px-4 py-2 text-white bg-[#fe7700] rounded-xl
                    hover:bg-[#b15300] shadow-md
                    transition duration-300 ease-in-out
                ">Create</button>

            </form>
            </div>
        </div>
    );
};

export default Create;
