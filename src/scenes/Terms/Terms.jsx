import React from "react";
import styled from "@emotion/styled" 
import { MainHeading, BodyText } from "../heading";

const TermsContainer = styled.div`
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

const BulletList = styled.ul`
  margin-left: 2rem;
  margin-bottom: 1.5rem;

  li {
    margin-bottom: 0.5rem;
    line-height: 1.6;
  }
`;

const Terms = () => {
  return (
    <TermsContainer>
      <MainHeading
        style={{
          fontSize: "40px",
          fontWeight: "800",
          marginBottom: "2rem",
          textAlign: "center",
          color: "#111827"
        }}
      >
        BROKERAGE SERVICES TERMS AND CONDITIONS
      </MainHeading>

      {/* Preamble */}
      <ContentSection>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          Sunny Logistics, a truckload brokerage service (DOT#3552400) ("Sunny Logistics") is in the business
          of arranging transportation of property by third-party motor carriers and Sunny Logistics holds
          authority from the Federal Motor Carrier Safety Administration to engage in operations as a
          transportation broker of general commodities (except Household Goods) in interstate or foreign
          commerce for Sunny Logistics customers ("Shipper"). Sunny Logistics and Shipper may be
          referred to herein individually as a "Party" and collectively as the "Parties."
        </BodyText>

        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          Shipper understands and acknowledges that: (1) Sunny Logistics is not a motor carrier, (2)
          Sunny Logistics is a broker which arranges for the transportation of freight by third-party motor
          carriers, and (3) Sunny Logistics intends to engage and contract with one or more motor carriers
          (as defined below), for purposes of satisfying obligations under these Terms and Conditions.
        </BodyText>

        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          By tendering freight to Sunny Logistics, arranging for freight to be tendered to Sunny Logistics,
          or otherwise requesting services from Sunny Logistics, Shipper agrees to be legally bound by
          these Terms and Conditions, as amended from time to time, by Sunny Logistics in its sole
          discretion.
        </BodyText>

        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          These Terms and Conditions, as amended from time to time, apply to any services of Sunny
          Logistics, unless expressly waived in a writing signed by an officer of Sunny Logistics. In
          addition, Shipper specifically waives access to Broker's records pursuant to 49 C.F.R. § 371.3.
        </BodyText>
      </ContentSection>

      {/* Section 1 - Agreement */}
      <ContentSection>
        <SectionTitle>1. AGREEMENT</SectionTitle>
        <SubSection>
          <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            SERVICE. Sunny Logistics agrees to arrange for transportation of Shipper's freight ("Goods") by
            third-party motor carriers ("Carrier(s)"). Sunny Logistics's responsibility is limited to arranging for,
            but not actually performing, transportation carriage of Goods. Nothing in these Terms and
            Conditions shall be deemed to require Sunny Logistics to provide services upon request of
            Shipper, and Sunny Logistics reserves the right to accept or decline, in its sole discretion, any
            particular request for services.
          </BodyText>
        </SubSection>
      </ContentSection>

      {/* Section 2 - Shipper Responsibilities */}
      <ContentSection>
        <SectionTitle>2. SHIPPER RESPONSIBILITIES</SectionTitle>
        
        <SubSection>
          <h3>2.1 Compliance with Laws</h3>
          <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            Shipper warrants that it is the beneficial owner or agent authorized to bind the beneficial owner
            with respect to these Terms and Conditions. Furthermore, Shipper warrants and represents that
            Shipper is in compliance with all laws, regulations and requirements applicable to Shipper's
            business and requested services. Shipper is responsible for complying with all applicable
            export and import laws and regulations.
          </BodyText>
        </SubSection>

        <SubSection>
          <h3>2.2 Special Handling</h3>
          <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            Unless specialized handling instructions are provided by Shipper in accordance with these Terms
            and Conditions, Shipper acknowledges and agrees that no specialized handling (including, but
            not limited to, controlled temperature service or protection from cross contamination) will be
            provided and Shipper further warrants and represents that any and all cargo has been packaged,
            so as to ensure cargo shall remain in safe and sanitary condition, without the need for any
            specialized handling by the Carrier. If Shipper wishes to request specialized handling, Shipper must 
            do so in writing provided to Sunny Logistics with the initial request for services with respect to the 
            specific consignment, to which such request relates (“Written Instructions”). Shipper acknowledges and 
            agrees that Sunny Logistics’s sole obligation, with respect to any requested special handling, is to pass 
            through to the Carrier the instructions contained in such a notice. Any failure or alleged failure to 
            comply with specialized instructions shall not, in and of itself, result in any presumption that the 
            shipment is unsafe, contaminated, adulterated, or otherwise unfit for its intended purpose or use, nor 
            shall it be otherwise grounds for rejection of a shipment or filing of a claim for cargo loss and damage
             without proof of actual loss or damage. Under no circumstances shall Sunny Logistics, or any Carrier, 
             be obligated to perform the duties of a “shipper” as that term is defined in any applicable law, rule or regulation. 
             BY TENDERING ANY SHIPMENT WHICH CONTAINS FOOD INTENDED FOR HUMAN OR ANIMAL CONSUMPTION, INCLUDING ARTICLES USED FOR 
             COMPONENTS THEREOF, SHIPPER WARRANTS AND REPRESENTS THAT IT HAS INSPECTED THE TRANSPORTATION EQUIPMENT IN QUESTION 
             AND DETERMINED THAT THE EQUIPMENT IS IN COMPLIANCE WITH ANY AND ALL STANDARDS APPLICABLE TO THE GOODS IN QUESTION. 
             ANY THIRD-PARTY MAKING SHIPPER’S GOODS AVAILABLE FOR TRANSPORTATION IS FULLY AUTHORIZED TO ACT ON BEHALF OF SHIPPER
            WITH RESPECT TO DETERMINING WHETHER THE TENDERED TRANSPORTATION EQUIPMENT IS ACCEPTABLE.
          </BodyText>
        </SubSection>

        <SubSection>
          <h3>2.3 Hazardous Materials and Dangerous Goods</h3>
          <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            Shipper will not tender for transportation or storage any hazardous materials or dangerous goods
            (as defined by applicable international convention or code, or otherwise applicable federal,
            state or provincial legislation or regulations, including but not limited to those set forth in
            DOT regulations, 49 C.F.R. Parts 100 to 185, and the Transport Dangerous Goods
            Regulations/Canada) without first giving written notice to Sunny Logistics at the time of the
            initial request for services with respect to the specific consignment to which such notice
            relates. Shipper is solely responsible for complying with any and all applicable laws and regulations 
            imposed on the offeror of any such cargo, including with respect to classifying, tendering, packaging 
            and labeling such hazardous materials as dangerous goods.
          </BodyText>
        </SubSection>

        <SubSection>
          <h3>2.4 Shipper Written Instructions</h3>
          <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            Shipper warrants and represents that it is authorized to tender the Goods to Sunny Logistics
            and that all descriptions of the Goods are complete, accurate, and include all information
            required by applicable law, rules, or regulation. Shipper must provide necessary shipping
            instructions and properly identify all Goods in the bill of lading. Shipper will not tender any
            prohibited or restricted commodities.
          </BodyText>
        </SubSection>

        <SubSection>
          <h3>2.5 Cargo Loading and Securement</h3>
          <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            Shipper is responsible for ensuring that Goods are properly and safely packaged and loaded. If
            Carrier is not allowed on the dock during loading, Shipper is responsible for ensuring that
            Goods are supported, blocked, braced, and secured. If Shipper is loading the Goods into the
            motor vehicle, Shipper must inspect the vehicle or other transportation equipment provided by
            the Carrier, to ensure it meets the requirements specified in the Written Instructions and is in
            an appropriate sanitary condition for transporting the Goods. Shipper must reject any equipment 
            that is not in apparent suitable condition to protect and preserve the Goods during transportation. 
            Vehicles and other transportation equipment used to transport the Goods will be deemed acceptable 
            to Shipper upon loading.
          </BodyText>
        </SubSection>
      </ContentSection>

      
      {/* Section 3 - Sunny Logistics Responsibilities */}
      <ContentSection>
        <SectionTitle>3. SUNNY LOGISTICS RESPONSIBILITIES</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          Sunny Logistics's sole responsibility, with respect to selection and retention of Carriers, is to
          make reasonable efforts to place Shipper's loads with responsible Carriers. However, Sunny
          Logistics makes no express or implied warranties or guarantees concerning delivery time or the
          locating of a Carrier to provide the transportation services requested by Shipper. Sunny
          Logistics will select Carriers, using criteria no less stringent than the following:
        </BodyText>

        <BulletList>
          <li>Verifying the Carrier's operating authority;</li>
          <li>
            Verifying the Carrier's insurance coverage, with coverage not less than:
            <BulletList>
              <li>$1,000,000 per occurrence for Commercial Auto Liability;</li>
              <li>$100,000 per occurrence for Motor Truck Cargo Liability;</li>
            </BulletList>
          </li>
        </BulletList>

        <BodyText style={{ marginBottom: "1rem", lineHeight: "1.6" }}>
          Sunny Logistics will require by written contract, that each Carrier providing transportation
          services agrees:
        </BodyText>

        <BulletList>
          <li>
            That it is and shall remain duly and legally licensed under applicable state, providential,
            and federal law, to provide transportation services;
          </li>
          <li>
            That it does not have a "conditional" or an "unsatisfactory" safety rating issued by the
            United States Department of Transportation or any state or provincial authority with
            jurisdiction over its operations, and that it will comply with all applicable federal, state,
            provincial laws;
          </li>
          <li>That it is performing services pursuant to a written contract; and,</li>
          <li>
            That it will obtain a receipt showing the kind and quantity of goods delivered to the
            consignee of each shipment at the destination.
          </li>
        </BulletList>
      </ContentSection>

      {/* Section 4 - Incidental, Consequential, and Other Indirect Damages */}
      <ContentSection>
        <SectionTitle>4. INCIDENTAL, CONSEQUENTIAL, AND OTHER INDIRECT DAMAGES</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          Neither Sunny Logistics nor Carriers shall be liable and each hereby disclaims responsibility,
          for any indirect, incidental, special, punitive, consequential, or multiplied damages, or
          other indirect costs, lost profits, chargebacks, fees, charges, or delays of any kind,
          whether or not foreseeable or disclosed including, but not limited to, lost profits or
          damages due to business interruption or shut down. Additionally, no breach of these Terms
          and Conditions, whether material or immaterial, or material deviation will extend Sunny
          Logistics's or Carriers' liability beyond the limitations specified herein.
        </BodyText>
      </ContentSection>

      {/* Section 5 - Receipts and Bills of Lading */}
      <ContentSection>
        <SectionTitle>5. RECEIPTS AND BILLS OF LADING</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          Shipper's insertion of Sunny Logistics's name on the bill of lading will be for Shipper's
          convenience only, and will not change Sunny Logistics's status as a property broker. The
          terms and conditions of any freight documentation used by Shipper or Carrier will not
          supplement, alter, or modify these Terms and Conditions.
        </BodyText>
      </ContentSection>

      {/* Section 6 - Payments */}
      <ContentSection>
        <SectionTitle>6. PAYMENTS</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          Sunny Logistics will charge and Shipper will pay all services charges in full and without
          offset or deduction within fifteen (15) days from the invoice date, including Saturdays,
          Sundays, and legal holidays. The credit term begins the day after the invoice date. On
          business-to-business credit card payments, Shipper will pay a two percent (2%) handling
          charge on all service fees and charges.
        </BodyText>
        
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          For any invoices not paid within fifteen (15) days from the invoice date, or other credit
          period, if applicable, and for which Sunny Logistics utilizes an outside collection agency
          and/or attorney to effect collections, Shipper shall pay a collection handling fee of
          thirty (30) percent of the unpaid amount. Shipper is responsible for all fees and costs,
          including reasonable attorneys' fees, litigation costs and collection agency fees, incurred
          by Sunny Logistics in enforcing collection of payments for unpaid invoices.
        </BodyText>

        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          If any information provided by Shipper is inaccurate or incomplete, Shipper acknowledges and 
          agrees that the agreed upon rates may, in Sunny Logistics’s sole discretion, be revised to 
          reflect the goods or weight actually tendered. Shipper shall also be responsible for any additional 
          accessorial charges imposed by the Carrier which were not anticipated by Sunny Logistics at the time 
          Sunny Logistics arranged for services with the Carrier or which were not otherwise included in the rate set 
          forth in the load confirmation. In no event will Sunny Logistics have any responsibility for, and Shipper will 
          defend, indemnify, and hold Sunny Logistics harmless from, and will pay and reimburse, any charges imposed by 
          third parties with respect to use of equipment in which cargo tendered by, to or on behalf of Shipper is or 
          has been laden, or for charges assessed with respect to storage or handling of any such equipment, including, 
          but not limited to, charges assessed by steamship lines, rail carriers, rail terminal operators, marine terminal operators 
          or port authorities. Without limiting the generality of the foregoing,
        </BodyText>

        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          Sunny Logistics shall have no liability for any such charges arising from or related to port congestion, 
          lack of equipment availability, labor shortages, or other situations impacting port or intermodal transportation operations. 
          Sunny Logistics shall have a possessory lien on all cargo, and any proceeds therefrom, in its, or in the Carrier’s, dominion 
          or control for the payment of any and all amounts due and owing from Shipper or with respect to services rendered at the request, 
          or for the benefit of, Shipper. In addition, to the extent not prohibited by applicable law, Sunny Logistics will have a general 
          lien on any cargo under its, or the Carrier’s, dominion or control, and any proceeds thereof, for any and all amounts due and owing 
          from Shipper or with respect to services rendered at the request, or for the benefit of, Shipper regardless of whether those amounts 
          relate to cargo or proceeds against which the general lien is enforced.
        </BodyText>



      </ContentSection>

      {/* Section 7 - Claims */}
      <ContentSection>
        <SectionTitle>7. CLAIMS</SectionTitle>
        <SubSection>
          <h3>7.1 Cargo Claims</h3>
          <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            Sunny Logistics is acting as a property broker, not a motor carrier or freight forwarder,
            and has no liability for loss, damage and/or delay to Goods except to the extent such
            claims are caused by Sunny Logistics's negligent acts or omissions, in which case, Sunny
            Logistics's liability shall be limited in accordance with subparagraph (C) below. Shipper is 
            responsible for filing a claim with Sunny Logistics, alleging Sunny Logistics’s liability for 
            cargo loss and damage within six (6) months of the date of delivery of the Goods (or, if none, 
            within six (6) months of the date the Goods should have been delivered). Failure to do so will result 
            in an absolute bar to any such claim and will relieve Sunny Logistics of any and all liability with respect thereto. 
            Sunny Logistics shall require Carrier to agree to assume the liability of a motor carrier (i.e. “Carmack Amendment” liability)
            for loss, damage and/or delay to the Goods while in transit, subject to a maximum liability of $100,000 per shipment, 
            unless otherwise agreed to in writing between the Parties. Shipper acknowledges that liability is limited in consideration 
            of a lower rate than would otherwise be applicable and that Shipper has the option to request a higher valuation of 
            liability at the time of booking. Sunny Logistics may assist Shipper in the filing and/or processing of claims with Carrier 
            (claims must be submitted at claims@sunnylogistics.co), if Shipper submits claims for cargo loss, damage and/or delay, 
            fully supported by all relevant documentation, including but not limited to the signed delivery receipt, with Sunny Logistics 
            (which Sunny Logistics will forward such cargo claim to the Carrier) within nine (9) months from the delivery date or, in the 
            event of non-delivery, the scheduled delivery date. Shipper must file any civil action in a court of law within two (2) years 
            from the date that any part of the claim is disallowed. Shipper acknowledges and agrees that the sole liability of 
            Sunny Logistics, with respect to loss, damage or delay to cargo, shall be as set forth in this provision and Shipper warrants 
            and represents that if it is not the owner of such cargo, Shipper holds authority from such owner to bind the owner to the 
            provisions of these Terms and Conditions. 
          </BodyText>
        </SubSection>

        <SubSection>
          <h3>7.2 All Other Claims</h3>
          <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            The Parties shall notify each other of all known material details of any claims in writing
            within 60 days of receiving notice of any claims other than cargo loss or damage claims
            and shall update each other promptly thereafter as more information becomes available. Civil actions 
            must be commenced within 2 years from the date either Party provides written notice to the other Party 
            of such a claim. Sunny Logistics agrees to notify Shipper of any accident or other event of which Sunny Logistics 
            is apprised and which prevents the Carrier from making a timely or safe delivery.
          </BodyText>
        </SubSection>

        <SubSection>
          <h3>7.3 Limit of Liability  </h3>
          <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            Sunny Logistics’s aggregate liability to Shipper, or any third party, for all claims, losses, and damages related 
            to the services provided pursuant to these Terms and Conditions, and any loss or damage to Goods for which shipment 
            is arranged by Sunny Logistics, whether based on an action in contract, equity, negligence, tort, statute, or other 
            theory, will not exceed an amount equal to the total charges specifically charged by Sunny Logistics for the service 
            or shipment giving rise to such claims or damages. Sunny Logistics’s services are provided “as is” and “as available,”
             without warranties of any kind, either express or implied, including, but not limited to warranties of fitness for a 
             particular purpose. Sunny Logistics is not liable for the consequences of identify theft or fraudulent conduct of 
             third parties, including utilizing the services of entities representing themselves to be Carriers or representatives thereof.
          </BodyText>
        </SubSection>

        <SubSection>
          <h3>7.4 Trailer Seals  </h3>
          <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            Unless otherwise agreed by Sunny Logistics, Shipper is responsible for applying the seal to any trailer tendered for services. 
            If the seal originally applied to the trailer is intact upon delivery, neither Sunny Logistics nor the Carrier will be liable 
            for shortage or theft unless there is physical evidence of unauthorized entry into the trailer while it was in the possession of 
              the Carrier and proof of actual damage or loss of Goods. Shortage or theft claims must be supported by seal records and actual 
            loading and unloading records. Additionally, neither Sunny Logistics nor the Carrier will be liable for shortage or theft if the 
            seal is broken: (1) at the direction and under the supervision of a Governmental Authority and is resealed after inspection by such 
            Governmental Authority; or, (2) because it becomes reasonably necessary to do so to inspect, reposition, or protect the cargo or the 
            trailer or to comply with applicable laws or regulations. In both instances, Sunny Logistics will request the Carrier to document the 
            breaking of the original seal and application of a new seal in such circumstances. In the absence of any other evidence, a missing, 
            unreadable, or broken seal will not create a presumption of loss to or contamination of the Goods, nor otherwise be grounds for rejection 
            of a shipment or filing of a claim for cargo loss and damage without proof of actual loss or damage. The consignee may not refuse delivery 
            of a shipment, even for food grade loads, due to broken, unreadable, or missing seals, unless there is direct physical evidence of product 
            tampering or contamination beyond the broken, unreadable, or missing seal. Contamination claims must be supported by appropriate quality 
            inspections outlining the full actual loss.
          </BodyText>
        </SubSection>

        <SubSection>
          <h3>7.5 Mitigating Damages  </h3>
          <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
            None of the provisions in these Terms and Conditions in any way limits Shipper’s obligation to mitigate damages, including by 
            salvaging all portions of a shipment for which there is a secondary market.
          </BodyText>
        </SubSection>
        

      </ContentSection>

      {/* Section 8 - Insurance */}
      <ContentSection>
        <SectionTitle>8. INSURANCE</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          Sunny Logistics agrees, at its own expense, at all times during the term of these Terms and
          Conditions, to maintain all insurance required by law for interstate property brokers.
          Shipper is responsible for maintaining property insurance covering the Goods, both for the
          Goods and in transit, including loading and unloading.

          Sunny Logistics may consult an insurance broker to arrange insurance appropriate to Shipper’s specific needs. 
          Upon request by the Shipper, Sunny Logistics may offer, for an additional cost and through its designated insurance 
          carrier or insurance broker, to arrange for shipment-specific cargo policies to be issued in Shipper’s name. 
          Following the issuance of any such policy through their insurance underwriter, Sunny Logistics will have no further duty
          regarding cargo insurance and no liability for loss of, delay of, or damage to the Goods during transport or storage, 
          whether covered by insurance on the Goods or not, and whether such loss, delay or damage has been caused or contributed
          to by its negligence or breach of these Terms and Conditions, or otherwise. Any coverage on the Goods will be subject
          to the terms and conditions of the specific policy or policies procured. Sunny Logistics is not liable if Shipper for
          any reason whatsoever, fails to recover a loss, in whole or in part, from the insurer under any applicable policy,
          even though the premium charged by the insurer may be different from what Sunny Logistics charges Shipper. 
          Any difference in charges between actual premium and premium stated on the invoice is a reasonable administrative charge 
          for the cost incurred by Sunny Logistics for arranging such shipment-specific insurance for and on behalf of Shipper.
          Shipper acknowledges and agrees that Sunny Logistics’s role is limited to facilitating placement of insurance coverage 
          with entities licensed to sell or broker cargo insurance, and that Sunny Logistics is not in the business of selling insurance 
          or insuring risk.
        </BodyText>

        


      </ContentSection>

      {/* Section 9 - Surety Bond */}
      <ContentSection>
        <SectionTitle>9. SURETY BOND</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          Sunny Logistics, in its capacity as a broker, shall maintain a surety bond or trust fund
          agreement, as required by the FMCSA, and shall furnish Shipper with proof upon written
          request.
        </BodyText>
      </ContentSection>

      {/* Section 10 - Indemnification */}
      <ContentSection>
        <SectionTitle>10. INDEMNIFICATION</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          Shipper must defend, indemnify, and hold Sunny Logistics, Sunny Logistics's employees and
          agents harmless from and against, and shall pay and reimburse for, any and all claims,
          losses, damages, liabilities, fines, judgments, penalties and amounts (including reasonable
          attorney fees) arising from or related to: (i) Shipper's or Shipper's employees' or agents'
          negligence or intentional misconduct; (ii) Shipper's breach of these Terms and Conditions;
          (iii) Shipper's or Shipper's employees' or agents' violation of applicable laws, rules, or
          regulations; (iv) Shipper's failure to provide, or Sunny Logistics's or the Carrier's
          compliance with or reliance on, instructions, directions, or request of Shipper; or (v)
          claims by Shipper, Shipper's customers, or any party to a bill of lading seeking to impose
          liability on Sunny Logistics in excess of the liabilities expressly assumed by Sunny
          Logistics herein or in excess of limitations on or exclusions from liability as set forth
          herein. Shipper must also indemnify Sunny Logistics from any attempts to recover from Sunny Logistics 
          by Shipper’s insurance carrier. The obligation to defend includes payment of all reasonable costs of 
          defense, including attorney fees, as they accrue. The foregoing notwithstanding, Shipper’s obligation 
          to hold harmless, defend, indemnify, pay and reimburse shall not apply to the extent any claim is caused 
          by the negligence or intentional misconduct of Sunny Logistics. Shipper may not enter into any third-party 
          agreements that would, in any manner whatsoever, constitute an admission of fault by Sunny Logistics or bind
          Sunny Logistics in any manner, without Sunny Logistics’s prior written consent.
        </BodyText>
      </ContentSection>

      {/* Section 11 - Assignment/Modifications of Agreement */}
      <ContentSection>
        <SectionTitle>11. ASSIGNMENT/MODIFICATIONS OF AGREEMENT</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          These Terms and Conditions may not be assigned or transferred by Shipper, in whole or in
          part, for any reason whatsoever without Sunny Logistics's prior written consent, and any
          such action or conduct in violation of the foregoing will be void and without effect. Sunny
          Logistics expressly reserves the right to assign these Terms and Conditions and to delegate
          any of its duties and obligations hereunder.
        </BodyText>
      </ContentSection>

      {/* Section 12 - Severability/Survivability */}
      <ContentSection>
        <SectionTitle>12. SEVERABILITY/SURVIVABILITY</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          In the event that the operation of any portion of these Terms and Conditions results in a
          violation of any law, or any provision is determined by a court of competent jurisdiction
          to be invalid or unenforceable, the Parties agree that such portion or provision shall be
          severable, and that the remaining provisions of these Terms and Conditions shall continue
          in full force and effect. The representations and obligations of the Parties shall survive
          the termination of these Terms and Conditions for any reason.
        </BodyText>
      </ContentSection>

      {/* Section 13 - Independent Contractor */}
      <ContentSection>
        <SectionTitle>13. INDEPENDENT CONTRACTOR</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          It is understood between Sunny Logistics and Shipper that Sunny Logistics is not an agent
          for Carrier or Shipper and shall remain at all times an independent contractor. Shipper
          does not exercise or retain any control or supervision over Sunny Logistics, its
          operations, employees, or Carrier. Sunny Logistics does not exercise or retain any control
          or supervision over Carrier, its operations, employees, or Shipper.
        </BodyText>
      </ContentSection>

      {/* Section 14 - Nonwaiver */}
      <ContentSection>
        <SectionTitle>14. NONWAIVER</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          Failure of either Party to insist upon performance of any of the terms, conditions or
          provisions of these Terms and Conditions, or to exercise any right or privilege herein, or
          the waiver of any breach of any of the terms, conditions or provisions of these Terms and
          Conditions, shall not be construed as thereafter waiving any such terms, conditions,
          provisions, rights or privileges, but the same shall continue and remain in full force and
          effect as if no forbearance or waiver had occurred.
        </BodyText>
      </ContentSection>

      {/* Section 15 - Notices */}
      <ContentSection>
        <SectionTitle>15. NOTICES</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          Excluding service of process, any notices to Sunny Logistics must be sent to Sunny
          Logistics, Attn: Sunny Logistics., 11 Municipal Drive Suite 200 Fishers, IN 46038, and
          must be delivered either by certified or registered mail, return receipt requested and
          postage prepaid, or by overnight courier service, and are deemed given upon receipt by
          Sunny Logistics or Shipper.
        </BodyText>
      </ContentSection>

      {/* Section 16 - Force Majeure */}
      <ContentSection>
        <SectionTitle>16. FORCE MAJEURE</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          Neither Party shall be liable to the other for failure to perform any of its obligations
          under these Terms and Conditions during any time in which such performance is prevented by
          fire, flood, or other natural disaster, war, pandemic, embargo, riot, civil disobedience,
          or the intervention of any government authority, or any other cause outside of the
          reasonable control of Shipper or Sunny Logistics, provided that the Party so prevented uses
          its best efforts to perform under these Terms and Conditions and provided further, that
          such Party provide reasonable notice to the other Party of such inability to perform.
          Performance requirements are extended by the amount of the delay except for payment
          obligations.
        </BodyText>
      </ContentSection>

      {/* Section 17 - Choice of Law and Venue */}
      <ContentSection>
        <SectionTitle>17. CHOICE OF LAW AND VENUE</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          All questions concerning the construction, interpretation, validity and enforceability of
          these Terms and Conditions, whether in a court of law or in arbitration, shall be governed
          by and construed and enforced in accordance with the federal laws regarding
          transportation, where applicable, and otherwise by the laws of the State of Illinois,
          without giving effect to any choice or conflict of law provision or rule that would cause
          the laws of any other jurisdiction to apply. The Parties agree to the exclusive personal
          jurisdiction and venue in a federal or state court in Cook County, Illinois.
        </BodyText>
      </ContentSection>

      {/* Section 18 - Entire Agreement */}
      <ContentSection>
        <SectionTitle>18. ENTIRE AGREEMENT</SectionTitle>
        <BodyText style={{ marginBottom: "1.5rem", lineHeight: "1.6" }}>
          These Terms and Conditions constitute the entire agreement intended by and between the
          Parties and supersedes all prior agreements, representations, warranties, statements,
          promises, information, arrangements, and understandings, whether oral, written, expressed
          or implied, with respect to the subject matter hereof. No terms and conditions stated in
          Shipper's purchase order or in any other Shipper order or tender documentation shall be
          incorporated into or form any part of this agreement, and all such terms and conditions
          shall be null and void. Notwithstanding anything to the contrary herein, Sunny Logistics
          reserves the right, at its sole discretion to modify and amend these Terms and Conditions
          at any time. In the event these Terms and Conditions are modified, the updated Terms and
          Conditions will be posted on Sunny Logistics's website. The current version shall be
          applicable at the time of shipment. By booking services with Sunny Logistics or tendering
          shipments to Sunny Logistics, Shipper agrees to be bound by these Terms and Conditions at
          the time of tender.
        </BodyText>
      </ContentSection>

    </TermsContainer>
  );
};

export default Terms;