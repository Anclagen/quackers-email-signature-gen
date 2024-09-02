function updateSignature() {
  const name = document.getElementById("name").value;
  const affiliate = document.getElementById("affiliate").value;
  const company = document.getElementById("companyName").value;
  const jobTitle = document.getElementById("jobTitle").value;
  const phone1 = document.getElementById("phone1").value;
  const phone2 = document.getElementById("phone2").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value;

  const signatureHTML = `
      <div>
        <p><strong>${name}${affiliate ? ` – ${affiliate}` : ""}</strong><br />
        ${jobTitle}<br />
        ${company}</p>
        <div style="width: fit-content;">
          <img style="width:300px" src="https://quackrecruitmentandtraining.co.uk/logos/quack-group-horizonal-full-logo.jpg" alt="quack group logo"/>
        </div>
        <hr style="border: none; border-top: 3px solid red; border-radius: 5px; margin: 1rem 0;" />
        <p>
          <a href="https://www.facebook.com/quackrecruitment" title="Check Out Our Facebook" target="_blank" style="text-decoration: none; color: #333;">
            <img src="https://quackrecruitmentandtraining.co.uk/interface/Facebook_Logo_Primary.png" style="height: 20px; vertical-align: middle;" alt="Facebook" /> Facebook
          </a> | 
          <a href="https://www.linkedin.com/company/quack-recruitment-training-limited/" title="Check Out Our LinkedIn" target="_blank" style="text-decoration: none; color: #333;">
            <img src="https://quackrecruitmentandtraining.co.uk/interface/LI-In-Bug.png" style="height: 20px; vertical-align: middle;" alt="LinkedIn" /> LinkedIn
          </a>
        </p>

        <p>
          <strong>Phone:</strong> ${phone1} | ${phone2}<br />
          <strong>Email:</strong> <a href="mailto:${email}" style="color: darkred;">${email}</a><br />
          <strong>Website:</strong> <a href="${website}" style="color: darkred;">${website}</a>
        </p>
        <p>
          <strong>Address:</strong><br />
          Quack Recruitment and Training Ltd<br />
          Business & Technology Centre<br />
          Stevenage,<br /> 
          SG1 2DX
        </p>
        <hr style="border: none; border-top: 3px solid red; border-radius: 5px;" />
        <div style="text-align: center; margin-top: 20px; background-color:white;">
            <img style="max-height: 80px; height: auto; width: auto; max-width: 100%; display: inline-block; margin: 5px;" src="https://quackrecruitmentandtraining.co.uk/footer/disability-confident-committed.jpg" alt="Disability Committed Logo">
            <img style="max-height: 80px; height: auto; width: auto; max-width: 100%; display: inline-block; margin: 5px;" src="https://quackrecruitmentandtraining.co.uk/footer/ALP.jpg" alt="ALP member logo">
            <img style="max-height: 80px; height: auto; width: auto; max-width: 100%; display: inline-block; margin: 5px;" src="https://quackrecruitmentandtraining.co.uk/footer/Sedex-Logo.png" alt="Sedex logo">
            <img style="max-height: 80px; height: auto; width: auto; max-width: 100%; display: inline-block; margin: 5px;" src="https://quackrecruitmentandtraining.co.uk/footer/ETF_Cyan_Digital_Logo.jpg" alt="Education & Training Foundation logo">
            <img style="max-height: 80px; height: auto; width: auto; max-width: 100%; display: inline-block; margin: 5px;" src="https://quackrecruitmentandtraining.co.uk/footer/Department_for_Work_and_Pensions_logo.svg.png" alt="Department for Work & Pensions">
            <img style="max-height: 80px; height: auto; width: auto; max-width: 100%; display: inline-block; margin: 5px;" src="https://quackrecruitmentandtraining.co.uk/footer/shaw_trust.png" alt="Shaw Trust logo">
            <img style="max-height: 80px; height: auto; width: auto; max-width: 100%; display: inline-block; margin: 5px;" src="https://quackrecruitmentandtraining.co.uk/footer/West_Midlands_Combined_Authority_logo.svg.png" alt="West Midlands Combine Authority logo">
            <img style="max-height: 80px; height: auto; width: auto; max-width: 100%; display: inline-block; margin: 5px;" src="https://quackrecruitmentandtraining.co.uk/footer/Approved-Training-Organisation-Status.jpg" alt="CITB Approved Training Organisation Status">
            <img style="max-height: 80px; height: auto; width: auto; max-width: 100%; display: inline-block; margin: 5px;" src="https://quackrecruitmentandtraining.co.uk/footer/EU_Social_Fund.png" alt="EU Social Fund">
            <img style="max-height: 80px; height: auto; width: auto; max-width: 100%; display: inline-block; margin: 5px;" src="https://quackrecruitmentandtraining.co.uk/footer/Highfields_Approved_Centre.jpg" alt="Highfields Approved Centre">
            <img style="max-height: 80px; height: auto; width: auto; max-width: 100%; display: inline-block; margin: 5px;" src="https://quackrecruitmentandtraining.co.uk/footer/SYMCA.JPG" alt="South Yorkshire Mayoral Combined Authority">
            <img style="max-height: 80px; height: auto; width: auto; max-width: 100%; display: inline-block; margin: 5px;" src="https://quackrecruitmentandtraining.co.uk/footer/skills_for_life_multiple_logo.png" alt="Skills For Life Multiply, Logo">
            <img style="max-height: 80px; height: auto; width: auto; max-width: 100%; display: inline-block; margin: 5px;" src="https://quackrecruitmentandtraining.co.uk/footer/Kent-Council.jpg" alt="Kent Council Logo">
            <img style="max-height: 80px; height: auto; width: auto; max-width: 100%; display: inline-block; margin: 5px;" src="https://quackrecruitmentandtraining.co.uk/footer/Cyber-Essentials-Badge.png" alt="Cyber Essentials Certification Badge">
        </div>
        <hr style="border: none; border-top: 3px solid red; border-radius: 5px;" />
       <div style="max-width:900px;">
        <p style="margin:0;">
          This email is sent for and on behalf of Quack Recruitment & Training.
       </p>
       <p style="margin:0;">
          Quack Recruitment & Training Ltd is a company registered in England, registered number: 11066952.
       </p>
       <p style="margin:0;">
         Registered Office: <br /> 
         Quack Recruitment and Training Ltd<br />
         Business & Technology Centre<br />
         Stevenage,<br /> 
         SG1 2DX
        </p>
        <p style="margin:0;"> 
          VAT registration number: 286535076.
        </p>
        <p><strong>CONFIDENTIALITY:</strong><br />
        This e-mail and any attachments are strictly private and confidential and are intended for the named recipient only. If you are not the intended named recipient, you are advised not to read or disclose the contents of this e-mail and/or any attachments to another person or take copies of them. If you receive this message in error, please notify our e-mail administrator and destroy the message. This e-mail and any attachments are protected by international copyright law.</p>
        <p><strong>E-MAIL VIRUSES:</strong><br />
        Quack Recruitment & Training, scans files sent by email and anti-virus before sending. It is the responsibility of the recipient to ensure that the emails it receives are virus-free. E-mails and attachments should always be checked with an up-to-date virus checker before the contents are opened, saved, or read. No responsibility is accepted by Quack Recruitment & Training, for any loss or damage arising in any way from the receipt, opening, or use of this or any file sent by or appearing/claiming to be sent by Quack Recruitment & Training.</p>
        <p><strong>SECURITY WARNING:</strong><br />
        This email has been created in the knowledge that internet email is not a 100% secure means of communication. You are advised to bear in mind the potential lack of security when emailing us.</p>
      </div>
  `;

  document.getElementById("signaturePreview").innerHTML = signatureHTML;
}

function copyToClipboard() {
  const signatureHTML = document.getElementById("signaturePreview").innerHTML;
  const textarea = document.createElement("textarea");
  textarea.value = signatureHTML;
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  alert("HTML signature copied to clipboard!");
}

function copyPreview() {
  const signaturePreview = document.getElementById("signaturePreview");
  const range = document.createRange();
  range.selectNodeContents(signaturePreview);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);

  try {
    document.execCommand("copy");
    alert("Signature copied to clipboard!");
  } catch (err) {
    alert("Failed to copy the signature");
  }

  // Clear selection
  selection.removeAllRanges();
}

// Initialize the preview on page load
updateSignature();
