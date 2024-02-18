const nodemailer = require("nodemailer");
const PropertiesReader = require("properties-reader");

function getMailContent(formData) {
  const tdOpen =
    '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px;">';
  const tdOpenEven =
    '<td style="border: 1px solid #dddddd; text-align: left; padding: 8px; background-color:#f2f2f2;">';
  const tableStyle = 'style="border-collapse: collapse;width: 100%;"';

  let html = "<table " + tableStyle + ">";
  html +=
    "<tr>" +
    tdOpen +
    "Name" +
    "</td>" +
    tdOpen +
    (formData.name ? formData.name : "") +
    "</td></tr>";
  html +=
    "<tr>" +
    tdOpenEven +
    "Country" +
    "</td>" +
    tdOpenEven +
    (formData.country ? formData.country : "") +
    "</td></tr>";
  html +=
    "<tr>" +
    tdOpen +
    "Email" +
    "</td>" +
    tdOpen +
    (formData.email ? formData.email.trim() : "") +
    "</td></tr>";
  html +=
    "<tr>" +
    tdOpenEven +
    "Company Name" +
    "</td>" +
    tdOpenEven +
    (formData.organisation ? formData.organisation : "") +
    "</td></tr>";
  html +=
    "<tr>" +
    tdOpen +
    "Telephone" +
    "</td>" +
    tdOpen +
    (formData.telephone ? formData.telephone : "") +
    "</td></tr>";
  html +=
    "<tr>" +
    tdOpenEven +
    "What would you like to contact us about" +
    "</td>" +
    tdOpenEven +
    (formData.contactabout ? formData.contactabout.trim() : "") +
    "</td></tr>";
  html +=
    "<tr>" +
    tdOpen +
    "What can we help you with " +
    "</td>" +
    tdOpen +
    (formData.contactreason ? formData.contactreason.trim() : "") +
    "</td></tr>";
  html += "</table>";
  return html;
}

const sendEmail = async (emailContent) => {
  console.log("in send mail method ", emailContent);
  let htmlcontent = getMailContent(emailContent);
  //console.log("content : " + htmlcontent);
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "fatwire.sites@gmail.com", // Your Gmail email address
      pass: "qyacnhdxlfetenwu", // Your Gmail password or App Password
    },
    tls: {
      rejectUnauthorized: false, // Accept self-signed certificates
    },
  });
  let mailOptions = {
    from: "narasimhan.ganesh@gmail.com",
    to: PropertiesReader.to
      ? PropertiesReader.to
      : "ganesh.narasimhan@griffiths-waite.co.uk",
    subject: PropertiesReader.subject
      ? PropertiesReader.subject
      : "API Contct US",
    html: htmlcontent,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    return { message: "Email sent successfully." };
  } catch (error) {
    console.error("An error occurred while sending the email:", error);
    throw new Error("An error occurred while sending the email.");
  }
};
exports.sendMail = sendEmail;
