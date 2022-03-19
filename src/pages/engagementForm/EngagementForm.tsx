import {
  CommandBar,
  DatePicker,
  defaultDatePickerStrings,
  Dropdown,
  ICommandBarItemProps,
  ICommandBarStyles,
  IDropdownOption, Label,
  MessageBar,
  PrimaryButton,
  TextField
} from '@fluentui/react'
import { Formik } from 'formik'
import React from 'react'
import { Content, SelectedText } from '../../components'
import { onFormatDate } from '../../utils/Helpers'
import "./engagementForm.css"
import * as Yup from 'yup';
import { useTranslation } from 'react-i18next'

const options: IDropdownOption[] = [
  { key: 'client1', text: 'client1' },
  { key: 'client2', text: 'client2' },
  { key: 'client3', text: 'client3' },
  { key: 'client4', text: 'client4' },
];


const styles: Partial<ICommandBarStyles> = {
  root: {
    paddingLeft: 0
  },
};


const EngagementForm = () => {
  const { t } = useTranslation();
  const _items: ICommandBarItemProps[] = [
    {
      key: 'create',
      text: 'Create',
      cacheKey: 'myCacheKey',
      iconProps: { iconName: 'CircleRing' },
      onClick: () => console.log("Create"),
    },
    {
      key: 'discard',
      text: 'Discard',
      cacheKey: 'myCacheKey',
      iconProps: { iconName: 'CircleRing' },
      onClick: () => console.log("Discard"),
    },
  ];

  const getErrorMessage = (isTouched?: boolean, value?: string): string => {
    return (isTouched ?? false) ? value ?? "" : "";
  };

  return (
    <>
      <MessageBar>{t("Message about the state of this view")}</MessageBar>
      <Content title={"Engagement"}>
        <Formik
          initialValues={{
            engagementName: '',
            engagementCode: ''
          }}
          validationSchema={Yup.object().shape({
            engagementName: Yup.string().required("This Field is Required"),
            engagementCode: Yup.string().required("This Field is Required")
          })}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {
            formik => (
              <>
                <CommandBar
                  items={_items}
                  farItemsGroupAriaLabel="More actions"
                  styles={styles}
                />
                <div className="ms-Grid" dir="ltr">
                  <div className="team-member-title" style={{ marginTop: "41px" }}>{t("New Engagement")}</div>
                  <div className="team-member-subtitle">{t("Define your engagement terms, team and timeline.")}</div>
                  <form id='form-engagement' onSubmit={formik.handleSubmit} style={{ marginTop: "13px" }}>
                    <div className="ms-Grid-row">
                      <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6">
                        <div className="ms-Grid-row gap-row">
                          <div className="ms-Grid-col ms-sm12 ms-md4 ms-lg4">
                            <Label className='engagement-label' required>Engagement Name</Label>
                          </div>
                          <div className="ms-Grid-col ms-sm12 ms-md8 ms-lg8">
                            <TextField
                              onBlur={formik.handleBlur}
                              id='engagement-name'
                              errorMessage={getErrorMessage(formik.touched.engagementName, formik.errors.engagementName)}
                              onChange={formik.handleChange}
                              name='engagementName' />
                          </div>
                        </div>
                        <div className="ms-Grid-row gap-row">
                          <div className="ms-Grid-col ms-sm12 ms-md4 ms-lg4">
                            <Label className='engagement-label' required>Engagement Code</Label>
                          </div>
                          <div className="ms-Grid-col ms-sm12 ms-md8 ms-lg8">
                            <TextField
                              onBlur={formik.handleBlur}
                              id='engagement-code'
                              errorMessage={getErrorMessage(formik.touched.engagementCode, formik.errors.engagementCode)}
                              onChange={formik.handleChange}
                              name='engagementCode' />
                          </div>
                        </div>
                        <div className="ms-Grid-row gap-row">
                          <div className="ms-Grid-col ms-sm12 ms-md4 ms-lg4">
                            <Label className='engagement-label' required>Start Date</Label>
                          </div>
                          <div className="ms-Grid-col ms-sm12 ms-md8 ms-lg8">
                            <DatePicker
                              showWeekNumbers={true}
                              firstWeekOfYear={1}
                              showMonthPickerAsOverlay={true}
                              placeholder="Start on"
                              ariaLabel="Start on"
                              formatDate={onFormatDate}
                              strings={defaultDatePickerStrings}
                            />
                          </div>
                        </div>
                        <div className="ms-Grid-row gap-row">
                          <div className="ms-Grid-col ms-sm12 ms-md4 ms-lg4">
                            <Label className='engagement-label' required>Completion Date</Label>
                          </div>
                          <div className="ms-Grid-col ms-sm12 ms-md8 ms-lg8">
                            <DatePicker
                              showWeekNumbers={true}
                              firstWeekOfYear={1}
                              showMonthPickerAsOverlay={true}
                              placeholder="Start on"
                              ariaLabel="Start on"
                              formatDate={onFormatDate}
                              strings={defaultDatePickerStrings}
                            />
                          </div>
                        </div>
                        <div className="ms-Grid-row gap-row">
                          <div className="ms-Grid-col ms-sm12 ms-md4 ms-lg4">
                            <Label className='engagement-label' required>Client Name</Label>
                          </div>
                          <div className="ms-Grid-col ms-sm12 ms-md8 ms-lg8">
                            <Dropdown
                              placeholder="Choose a client"
                              options={options}
                            />
                          </div>
                        </div>
                        <div className="ms-Grid-row gap-row">
                          <div className="ms-Grid-col ms-sm12 ms-md4 ms-lg4">
                            <Label className='engagement-label'>Notes</Label>
                          </div>
                          <div className="ms-Grid-col ms-sm12 ms-md8 ms-lg8">
                            <TextField multiline />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="team-member">
                    <div className="team-member-title">{t("Team Member")}</div>
                    <div className="team-member-subtitle">{t("Mobilize your team and define workflow for the engagement.")}</div>
                    <div className="team-member-box">
                      <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6">
                          <SelectedText totalPerson={2} label={t("Preparer(s)")} />
                          <SelectedText totalPerson={2} label={t("Reviewer(s)")} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="team-member">
                    <div className="team-member-title">{t("Notification")}</div>
                    <div className="team-member-subtitle">{t("Define counterparts that will be notified for your progress and activities")}</div>
                    <div className="team-member-box">
                      <div className="ms-Grid-row">
                        <div className="ms-Grid-col ms-sm12 ms-md12 ms-lg6">
                          <SelectedText totalPerson={2} label={t("Start / Stop")} />
                          <SelectedText totalPerson={1} label={t("Progress")} />
                          <SelectedText totalPerson={1} label={t("Issue Tracker")} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div style={{ bottom: 0, padding: "24px" }}>
                  <PrimaryButton type='submit' form='form-engagement' text="Create" allowDisabledFocus />
                </div>
              </>
            )
          }
        </Formik>
      </Content>
    </>
  )
}

export default EngagementForm