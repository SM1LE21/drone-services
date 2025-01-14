import React from "react";
import { useTranslation } from 'react-i18next';

const FormModal = ({ onClose, formType }) => {
  const { t } = useTranslation();

  const handleDelayedClose = () => {
    setTimeout(() => {
      onClose();
    }, 0);
  };

  const renderTitle = () => {
    switch (formType) {
      case 'custom':
        return t('formModal.customRequest');
      case 'event':
        return t('formModal.eventPhotography');
      case 'realEstate':
        return t('formModal.realEstatePhotography');
      default:
        return t('formModal.defaultForm');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg overflow-y-auto w-full max-w-3xl" style={{ maxHeight: "80vh" }}>
        <form
          action="https://formspree.io/f/mayrvdll"
          method="POST"
          className="space-y-6"
          onSubmit={handleDelayedClose}
        >
          {/* Title */}
          <h2 className="text-2xl font-bold text-white">{renderTitle()}</h2>
          <p className="text-sm text-gray-400">{t('formModal.pitchProject')} {t('formModal.responseTimeInfo')}</p>

          {/* Input Fields */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-300">{t('formModal.firstNameLabel')}</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              required
              className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-gray-100 placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
              placeholder="Enter your first name"
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-300">{t('formModal.familyNameLabel')}</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              required
              className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-gray-100 placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
              placeholder="Enter your last name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">{t('formModal.emailLabel')}</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-gray-100 placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300">{t('formModal.phoneLabel')}</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-gray-100 placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
              placeholder="Enter your phone number (optional)"
            />
          </div>

          {/* Text Area */}
          <div>
            <label htmlFor="details" className="block text-sm font-medium text-gray-300">{t('formModal.projectDetailsLabel')}</label>
            <textarea
              id="details"
              name="details"
              required
              placeholder={t('formModal.projectDetailsPlaceholder')}
              className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-gray-100 placeholder-gray-500 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2 h-28"
            />
          </div>

          {/* Optional Meeting Scheduler */}
          <div>
            <label htmlFor="shootDateTime" className="block text-sm font-medium text-gray-300">{t('formModal.shootDateTimeLabel')}</label>
            <input
              type="datetime-local"
              id="shootDateTime"
              name="shootDateTime"
              className="mt-1 block w-full rounded-md border-gray-700 bg-gray-900 text-gray-100 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="bg-indigo-600 text-white py-2 px-4 rounded-md shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {t('formModal.submitButtonText')}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-200"
            >
              {t('formModal.closeButtonText')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
