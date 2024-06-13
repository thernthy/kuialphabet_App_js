import AudioPlayer from "../../components/soundPlayer";
import { useWordDetail } from "../../hooks/hookDetail";
import { useTranslation } from "react-i18next";

export const WordDetail= () => {
    const { t } = useTranslation("global");
    const {data} = useWordDetail()
    const handleClose = () => {
        
    }
    return(
        <div className="fixed inset-0 w-full bg-red-300 flex items-center justify-center z-50 ">
            <div className="fixed inset-0 bg-gray-800 opacity-50"></div>
            <div className="bg-white rounded-lg shadow-lg p-6  z-10 max-h-screen w-full lg:px-9 mx-auto overflow-y-auto pt-20">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold"></h2>
            </div>
            <div className="text-gray-700 w-full">
                <div className="md:grid md:grid-cols-2 md:gap-4 mb-4  w-full">
                    <div className="px-1 py-2 flex flex-col items-center justify-center gap-3">
                        <div className="bg-blue-600 max-h-80 min-h-40 max-w-96 min-w-32">
                            <img src={`${process.env.REACT_APP_BASED_URL}storage/${data?.cover_photo}`} alt="" />
                        </div>
                        <div className="px-2 py-1">
                            <AudioPlayer audioFile={`${process.env.REACT_APP_BASED_URL}storage/${data?.audio_files}`} />
                        </div>
                    </div>
                    <div>
                        <table className="min-w-full bg-white border border-gray-300">
                            <thead className="">
                                <tr className="w-full bg-gray-100 border-b border-gray-300">
                                    <th className="text-center border-r border-gray-300 capitalize">{t("homePage.kui_at")}</th>
                                    <th className="text-center border-r border-gray-300 capitalize">{t("homePage.kui_atreu")}</th>
                                    <th className="text-center capitalize">{t("wordPage.english_pronunciation")}</th>
                                    <th className="text-center border-r border-gray-300 capitalize">{t("header.menue_text.khmer")}</th>
                                    <th className="text-center capitalize">{t("header.menue_text.english")}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="text-center px-2 py-1">{data?.kui_1}</td>
                                    <td className="text-center px-2 py-1">{data?.kui_2}</td>
                                    <td className="text-center px-2 py-1">{data?.english_word}</td>
                                    <td className="text-center px-2 py-1">{data?.khmer_word}</td>
                                    <td className="text-center px-2 py-1">{data?.english_word}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-4 mb-4  w-full">
                    <div>
                        <h5 className=" capitalize">{t("homePage.explain_in_khmer")}:</h5><hr />
                        <div className=" max-w-full mb-4" dangerouslySetInnerHTML={{ __html: data?.explain_kh }} />
                    </div>
                    <div>
                        <h5 className="text-yellow-500 capitalize">{t("homePage.explain_in_english")}:</h5><hr />
                        <div className=" max-w-full" dangerouslySetInnerHTML={{ __html: data?.explain_en }} />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}