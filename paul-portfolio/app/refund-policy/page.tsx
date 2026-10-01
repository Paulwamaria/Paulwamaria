import LegalPage from "../components/LegalPage";
export const metadata = { title: "Refund Policy | Emryon" };
export default function RefundPolicyPage(){return <LegalPage title="Refund Policy" intro="ProjectSupport contributions are voluntary support for Paul Wamaria's independent software projects. This policy explains how refund requests are handled." sections={[
{title:"Voluntary contributions",body:<p>Because ProjectSupport contributions are voluntary donations intended to support ongoing project work and related costs, completed contributions are generally treated as final once successfully processed.</p>},
{title:"When to contact me",body:<p>If you believe a contribution was duplicated, processed for the wrong amount, made in error, or affected by a technical problem, contact me as soon as possible. Requests will be reviewed individually using the available transaction records and payment-provider information.</p>},
{title:"Payment-provider processing",body:<p>Where a refund is approved, the method and timing may depend on the payment provider and the original payment method. Provider fees, processing rules, or settlement status may affect what can be reversed.</p>},
{title:"How to request a review",body:<p>Email <a className="text-fuchsia-300 hover:underline" href="mailto:paulwamaria@gmail.com">paulwamaria@gmail.com</a> with the contribution date, amount, transaction reference if available, and a short explanation. Do not send PINs, passwords, or other secret payment credentials.</p>}
]}/>}
