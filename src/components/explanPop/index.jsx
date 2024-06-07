import { SoundPlayer } from "../soundPlayer"

export const ExplanationPopup = ({data}) => {
    return(
        <div className="fixed inset-0 w-full bg-red-300 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
            <div className="bg-white rounded-lg shadow-lg p-6  z-10 max-h-screen w-full lg:px-9 mx-auto overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">wrwrwrwrwrwrwr</h2>
                <button  className="text-gray-500 hover:text-gray-700">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                </button>
            </div>
            <div className="text-gray-700 w-full">
                <div className="md:grid md:grid-cols-2 md:gap-4 mb-4  w-full">
                    <div className="px-1 py-2">
                        <div className="bg-blue-600 max-h-80 min-h-40 max-w-96 min-w-32">
                            <img src={`${process.env.REACT_APP_BASED_URL}storage/${data[0]?.cover_photo}`} alt="" />
                        </div>
                        <div className="px-2 py-1">
                            <SoundPlayer />
                        </div>
                    </div>
                    <table className="min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="w-full bg-gray-100 border-b border-gray-300">
                                <th className="text-center border-r border-gray-300">តំបន់អ្ទ័</th>
                                <th className="text-center border-r border-gray-300">តំបន់អ្ទ្រើ</th>
                                <th className="text-center border-r border-gray-300">ខ្មែរ</th>
                                <th className="text-center">អងគ្លេស</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-2 py-1">{data[0].kui_1}</td>
                                <td className="px-2 py-1">{data[0].kui_2}</td>
                                <td className="px-2 py-1">{data[0].khmer_word}</td>
                                <td className="px-2 py-1">{data[0].english_word}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h5>Expland Khmer:</h5><hr />
                <div className=" max-w-xl mb-4" dangerouslySetInnerHTML={{ __html: data[0]?.explain_kh }} />
                <h5 className="text-yellow-500">Expland English:</h5><hr />
                <div className=" max-w-xl" dangerouslySetInnerHTML={{ __html: data[0]?.explain_en }} />
            </div>
            <div className="flex justify-end mt-4">
                <button  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                Close
                </button>
            </div>
            </div>
        </div>
    )
}