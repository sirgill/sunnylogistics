import React from "react";
import styled from "@emotion/styled";
import { MainHeading, BodyText } from "../heading";

const PrivacyContainer = styled.div`
  max-width: 1000px;
  margin: 4rem auto;
  padding: 0 2rem;
`;

const ContentSection = styled.section`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 2rem 0 1rem 0;
  color: #111827;
`;

const SubSection = styled.div`
  margin: 1.5rem 0;

  h3 {
    color: #374151;
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }
`;

const Privacy = () => {
  return (
    <PrivacyContainer>
      <MainHeading
        style={{
          fontSize: "40px",
          fontWeight: "800",
          marginBottom: "2rem",
          textAlign: "center",
          color: "#111827"
        }}
      >
        WEBSITE TERMS OF USE AND PRIVACY POLICY
      </MainHeading>

      {/* Introduction */}
      <ContentSection>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          Sunny Logistics ("Sunny Logistics") provides website features to you subject to the following
          conditions. If you visit sunnylogistics.co you accept these conditions. Please read them carefully.
          In addition, when you use any current or future Sunny Logistics service or business, you will be
          subject to both this Website Terms of Use and Privacy Policy agreement and the guidelines and
          conditions applicable to such service or business.
        </BodyText>
      </ContentSection>

      {/* Would you like me to continue with the rest of the sections? */}
      {/* Website Terms of Use Section */}
      <ContentSection>
        <SectionTitle>WEBSITE TERMS OF USE</SectionTitle>
        <SubSection>
          <h3>Intellectual Property and Restrictions on Use of Information and Content</h3>
          <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            All information and content provided on this website, whether explicitly marked or not, is the
            property of Sunny Logistics and is subject to U.S. and international copyright and unfair
            competition laws. The information and content provided includes, but is not limited to, the text,
            graphics, image, video, audio, animation, software, their related files and their arrangement on
            the website.
          </BodyText>

          <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            All trademarks, service marks, logos, model and brand names, emblems and protectable trade
            dress elements (collectively, "marks"), whether explicitly marked or not, used on this website are
            owned by Sunny Logistics and are subject to U.S. (federal and state) and international
            trademark and unfair competition laws.
          </BodyText>

          <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            You must not copy, reproduce, download, upload, post, broadcast, transmit, distribute, publish,
            republish, or otherwise use any information, software, services, content or marks available on
            this website in any form or by any means for any commercial use, including by using any
            information storage or retrieval system, without the express written permission of Sunny
            Logistics.
          </BodyText>
        </SubSection>
      </ContentSection>

      {/* Submissions Section */}
      <ContentSection>
        <SectionTitle>SUBMISSIONS</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          We welcome your comments regarding Sunny Logistics. However, any comments, feedback,
          notes, messages, ideas, suggestions or other communications (collectively, "communications")
          sent to Sunny Logistics shall be and remain the exclusive property of Sunny Logistics. Your
          submission of any such communications shall constitute an assignment to Sunny Logistics of,
          and you hereby assign and agree to assign to Sunny Logistics, all worldwide rights, titles and
          interests in all copyright and other intellectual property rights in the communications.
        </BodyText>
      </ContentSection>

      {/* Third-Party Sites Section */}
      <ContentSection>
        <SectionTitle>THIRD-PARTY SITES</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          Sunnylogistics.co may link to and/or contain advertisements about non-Sunny Logistics owned
          or controlled websites or other internet resources. Sunny Logistics neither controls nor has
          reviewed or approved the content that appears on these sites and is not responsible for the
          legality, accuracy or appropriateness of any such content.
        </BodyText>
      </ContentSection>

      {/* Privacy Policy Section */}
      <ContentSection>
        <SectionTitle>PRIVACY POLICY</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          Sunny Logistics's privacy policy governs how we collect and use personal information.
        </BodyText>

        <SubSection>
          <h3>Collection of Information</h3>
          <h4 style={{ fontWeight: "600", marginBottom: "1rem" }}>Personal Information about Customers</h4>
          <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            In the course of inquiring about or using Sunny Logistics's services, including registering on or
            using our website you may be asked for, among other things, the following personal information:
            your name, e-mail address, postal address, telephone number, fax number, business contact
            information, communication preferences and other registration information.
          </BodyText>

          <h4 style={{ fontWeight: "600", marginBottom: "1rem" }}>Personal Information about Carriers/Drivers</h4>
          <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            In the course of inquiring about or moving loads, or registering on or using our services, you
            may be asked for, among other things, the following personal information: your name, e-mail
            address, postal address, telephone number, business contact information, docket information,
            carrier number, truck/equipment type, and other registration information.
          </BodyText>
        </SubSection>

        <SubSection>
          <h3>Sharing of Information</h3>
          <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            Sunny Logistics respects and values the relationships we build with our customers and carriers.
            We do not sell personal information to other websites or businesses.
          </BodyText>
        </SubSection>

        <SubSection>
          <h3>Communication Preferences and Control Over Information</h3>
          <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            Sunny Logistics may send you communications by email, mobile text (SMS) messaging,
            telephone calls, or push notification. Sunny Logistics may also send emails to customers
            (including their employees) that promote the same kinds of products and services Sunny
            Logistics is presently providing them.
          </BodyText>
        </SubSection>
      </ContentSection>

      {/* Information Security Section */}
      <ContentSection>
        <SectionTitle>INFORMATION SECURITY</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          Securing your personal information is important to Sunny Logistics. The personal information we
          collect is stored within databases that we control directly or through our service providers.
          Sunny Logistics will exercise all reasonable efforts to safeguard the confidentiality of personal
          information, such the use of firewalls and encryption technology consistent with industry
          standards.
        </BodyText>
      </ContentSection>

      {/* European Residents Section */}
      <ContentSection>
        <SectionTitle>EUROPEAN RESIDENTS</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          If you are a resident of the European Economic Area ("EEA"), the following additional provisions
          apply to our processing of your Personal Information. For such residents, the provisions of this
          EEA Addendum prevail over conflicting provisions of the Privacy Policy.
        </BodyText>

        <SubSection>
          <h3>Data Subject Rights</h3>
          <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            If you are an EEA resident, you have rights as a data subject under applicable data protection
            law. You may exercise these rights, in accordance with applicable law, free of charge or (where
            warranted) for a reasonable fee. These rights include:
          </BodyText>
          <ul style={{ marginLeft: "2rem", marginBottom: "1.5rem" }}>
            <li>the right to request access to your Personal Information;</li>
            <li>the right to receive a copy of your Personal Information for purposes of transmitting it to
                another company;</li>
            <li>the right to have your Personal Information corrected or erased or restricted;</li>
            <li>the right to withdraw any consent you have provided to our processing of your Personal
                Information;</li>
            <li>the right to object to our processing of your Personal Information, including profiling.</li>
          </ul>
        </SubSection>
      </ContentSection>
    </PrivacyContainer>
  );
};

export default Privacy;