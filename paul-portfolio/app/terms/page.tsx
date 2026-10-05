import LegalPage from "../components/LegalPage";
export const metadata = { title: "Terms | Emryon" };
export default function TermsPage(){return <LegalPage title="Terms" intro="These terms apply to the Emryon website and ProjectSupport. Emryon is Paul Wamaria's independent software and digital-product brand, not a registered company." sections={[
{title:"ProjectSupport",body:<p>ProjectSupport is a payment API that enables people to provide voluntary project support for independent software projects created or maintained by Paul Wamaria. Contributions may help cover development, hosting, infrastructure, testing, maintenance, and related project costs.</p>},
{title:"Nature of contributions",body:<p>A contribution is voluntary. It is not an investment, loan, equity purchase, crowdfunding security, or purchase of ownership in Emryon or any supported project. A contribution does not guarantee a financial return, project completion, continued availability, a particular feature, or other reward unless expressly stated before payment.</p>},
{title:"Acceptable use",body:<p>You must not misuse the website or ProjectSupport, attempt unauthorized access, interfere with service operation, submit fraudulent transactions, or use the service in violation of applicable law.</p>},
{title:"Availability and changes",body:<p>Projects and services may evolve, pause, change, or be discontinued. Reasonable care is taken to keep information accurate and services available, but uninterrupted or error-free operation is not guaranteed.</p>},
{title:"Contact",body:<p>Questions about these terms can be sent to <a className="text-fuchsia-300 hover:underline" href="mailto:paulwamaria@gmail.com">paulwamaria@gmail.com</a>.</p>}
]}/>}
