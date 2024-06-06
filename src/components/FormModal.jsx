import React from "react";
import { useTranslation } from 'react-i18next';

const FormModal = ({ onClose, formType }) => {
  const { t } = useTranslation();

  const handleSubmit = (event) => {
    event.preventDefault();
    onClose();
    event.target.submit();
  };

  const renderTitle = () => {
    switch(formType) {
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

  const renderPackageOptions = () => {
    switch(formType) {
      case 'event':
        return (
          <>
            <option value="299">{t('formModal.basicCoverageOption')}</option>
            <option value="595">{t('formModal.standardPackageOption')}</option>
            <option value="895">{t('formModal.premiumPackageOption')}</option>
          </>
        );
      case 'realEstate':
        return (
          <>
            <option value="249">{t('formModal.basicFlyoverOption')}</option>
            <option value="495">{t('formModal.standardPackageRealEstateOption')}</option>
            <option value="795">{t('formModal.premiumPackageRealEstateOption')}</option>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4 cursor-default">
      <div className="bg-white p-10 rounded-lg shadow-lg overflow-y-auto
                      w-full max-w-4xl sm:w-11/12 sm:max-w-full sm:h-11/12 sm:max-h-full sm:py-12
                      md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 2xl:max-w-5xl"
                      style={{ maxHeight: "80vh" }}>
        <form action="https://formspree.io/f/mayrvdll" method="POST" className="space-y-6" onSubmit={handleSubmit}>
          <h2 className="text-xl font-semibold text-gray-900">{renderTitle()}</h2>
          {/* User Info Fields */}
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">{t('formModal.firstNameLabel')}</label>
            <input type="text" id="firstName" name="firstName" required 
                   className="input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">{t('formModal.familyNameLabel')}</label>
            <input type="text" id="lastName" name="lastName" required 
                   className="input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('formModal.emailLabel')}</label>
            <input type="email" id="email" name="email" required 
                   className="input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">{t('formModal.phoneLabel')}</label>
            <input type="tel" id="phone" name="phone" 
                   className="input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
          </div>

          {/* Date Picker Field */}
          <div>
            <label htmlFor="shootDateTime" className="block text-sm font-medium text-gray-700">{t('formModal.shootDateTimeLabel')}</label>
            <input type="datetime-local" id="shootDateTime" name="shootDateTime" 
                   className="input_dropdown mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
          </div>

          {/* Package Selection or Custom Project Details */}
          {formType === 'custom' ? (
            <div>
              <p className="text-sm text-gray-600">{t('formModal.pitchProject')}</p>
              <label htmlFor="details" className="block text-sm font-medium text-gray-700">{t('formModal.projectDetailsLabel')}</label>
              <textarea id="details" name="details" required placeholder={t('formModal.projectDetailsPlaceholder')}
                        className="custom_input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
            </div>
          ) : (
            <div>
              <label htmlFor="package" className="block text-sm font-medium text-gray-700">{t('formModal.choosePackageLabel')}</label>
              <select id="package" name="package" required 
                      className="input_dropdown mt-1 block w-full rounded-md focus:ring-opacity-50">
                {renderPackageOptions()}
              </select>
              <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mt-4">{t('formModal.additionalInfoLabel')}</label>
              <textarea id="additionalInfo" name="additionalInfo" placeholder={t('formModal.additionalInfoPlaceholder')}
                        className="custom_input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"/>
            </div>
          )}

          <p className="text-sm text-gray-500">{t('formModal.responseTimeInfo')}</p>

          {/* Form Submission */}
          <div className="flex justify-between items-center">
            <button type="submit" className="button-17-primary inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2">
              {t('formModal.submitButtonText')}
            </button>
            <button type="button" onClick={onClose} className="button-17 ml-4 inline-flex justify-center py-2 px-4 border  focus:outline-none focus:ring-2 focus:ring-offset-2">
              {t('formModal.closeButtonText')}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormModal;
