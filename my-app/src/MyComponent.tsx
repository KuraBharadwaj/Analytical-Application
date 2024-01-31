import React, { useEffect, useState } from "react";
import { BusinessPartner } from "../models/BusinessPartner";
import { fetchBusinessPartners } from "../services/api";
import { useNavigate } from "react-router-dom";
import {
  AnalyticalTable,
  Text,
  DynamicPage,
  DynamicPageHeader,
  FlexBox,
  DynamicPageTitle,
  Breadcrumbs,
  BreadcrumbsItem,
  Title,
} from "@ui5/webcomponents-react";

export function MyComponent() {
  const [businesspartners, setBusinessPartners] = useState<BusinessPartner[]>(
    []
  );
  useEffect(() => {
    const loadData = async () => {
      const data = await fetchBusinessPartners();
      setBusinessPartners(data);
    };
    loadData();
  }, []);

  const navigate = useNavigate();
  const booltrue = true;
  const onbdhome = () => {
    navigate("/home");
  };

  //declaring the columnns from the Business Partner API
  const bpcolumns = [
    { Header: "Full Name", accessor: "BusinessPartnerFullName" },
    { Header: "Created By", accessor: "CreatedByUser" },
    { Header: "Creation Date", accessor: "CreationDate" },
    { Header: "Business Partner", accessor: "BusinessPartner" },
    { Header: "Form of Address", accessor: "FormOfAddress" },
  ];

  return (
    <>
      <DynamicPage
        headerCollapsed={booltrue}
        headerTitle={
          <DynamicPageTitle
            header={<Title>Business Partners</Title>}
            breadcrumbs={
              <Breadcrumbs onItemClick={onbdhome}>
                <BreadcrumbsItem>Home</BreadcrumbsItem>
                <BreadcrumbsItem>Business Partner</BreadcrumbsItem>
              </Breadcrumbs>
            }
          ></DynamicPageTitle>
        }
      ></DynamicPage>
      <AnalyticalTable
        data={businesspartners}
        columns={bpcolumns}
      ></AnalyticalTable>
    </>
  );
}
