import React, { useState } from 'react';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useTranslation } from 'react-i18next';
import { HookQuestion } from '../../hooks/hooQuestion';

export const Faqs = () => {
    const [openQuestion, setOpenQuestion] = useState(null);
    const {data, isLoading, error, search, setSearch, refetch} = HookQuestion();
    const { t, i18n} = useTranslation("global");
    const handleToggle = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };
const renderQuestion = () => {
        if(isLoading){
            return <p>Loading...</p>
        }
        if(data?.length === 0 && error){
            return <p>Not found data!</p>
        }
        return (
            <ul className='pt-4 max-w-xxl mx-auto'>
            {data?.map((faq, index) => (
                    <li
                        key={index}
                        className='border border-spacing-3 hover:bg-slate-200 border-gray-300 px-2 py-3 rounded-md cursor-pointer mb-2'
                        onClick={() => handleToggle(index)}
                    >
                        <div className='flex flex-row items-center justify-between pl-3'>
                            <div>{faq.question}</div>
                            <FontAwesomeIcon icon={openQuestion === index ? faMinus : faPlus} />
                        </div>
                        {openQuestion === index && (
                            <div className='pl-3 pt-2'>
                                {i18n.language === "kh" &&
                                 <>
                                    <div dangerouslySetInnerHTML={{ __html: faq?.answer_kh }} />
                                 </>
                                 
                                }
                                {i18n.language === "en" &&
                                    <div dangerouslySetInnerHTML={{ __html: faq?.answer_en }} />
                                }

                            </div>
                        )}
                    </li>
              ))}
          </ul>
        )
      }
    

    return (
        <>
            <section className="breadcrumb__area background-bg pt-180 pb-180 include-bg p-relative fix"
               style={{backgroundImage: `url(${require('../../assets/banner/faqs.png')})`}}>
                <div className="tp-breadcrmb-circle-one"></div>
                <div className="tp-breadcrmb-circle-two"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-12">
                            <div className="breadcrumb__wrapper z-index-6 d-flex justify-content-between align-items-center">
                                <div className="breadcrumb__content">
                                    <h3 className="breadcrumb__title">{t("faqsPage.faqs")}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className='pt-4 container'>
                <h3 className='text-center'>{t("faqsPage.some_answered_about_our_organization")}</h3>
                <div className='py-2'>
                    <p className='text-center'>{t("faqsPage.explain_content")}</p>
                </div>

               {renderQuestion()}
            </div>
        </>
    );
};
