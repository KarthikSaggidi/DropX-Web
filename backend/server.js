require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const multer = require('multer');
const cors = require('cors');

const app = express();
app.use(cors()); 
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, 
    pass: process.env.EMAIL_PASS, 
  },
});

transporter.verify((error, success) => {
  if (error) {
    console.error("Email configuration error:", error.message);
  } else {
    console.log("Server is ready to send emails!");
  }
});

app.post('/api/apply', upload.single('resume'), async (req, res) => {
  try {
    const { 
      firstName, lastName, email, phone, experience, 
      isWorking, currentPosition, currentCTC, expectedCTC, role 
    } = req.body;

    const resumeFile = req.file; 

    // Ultra-clean, newly designed Email UI template
    const emailHTML = `
      <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f8fafc; padding: 40px 0; width: 100%;">
        <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          
          <!-- Banner Top Bar -->
          <div style="background: linear-gradient(135deg, #4f46e5 0%, #3b82f6 100%); padding: 32px; text-align: center; color: #ffffff;">
            <span style="background: rgba(255,255,255,0.2); padding: 6px 14px; border-radius: 20px; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1px;">New Submission</span>
            <h1 style="margin: 16px 0 6px; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">${role}</h1>
            <p style="margin: 0; opacity: 0.9; font-size: 14px;">DropXcorp Talent Acquisition Portal</p>
          </div>
          
          <!-- Content Details Area -->
          <div style="padding: 36px;">
            <div style="display: flex; align-items: center; margin-bottom: 24px; border-bottom: 2px solid #f1f5f9; padding-bottom: 16px;">
              <div>
                <h3 style="margin: 0; font-size: 18px; color: #0f172a; font-weight: 700;">${firstName} ${lastName}</h3>
                <p style="margin: 4px 0 0; color: #64748b; font-size: 14px;">Submitted Candidate Profile</p>
              </div>
            </div>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; color: #64748b; font-size: 13px; font-weight: 600; width: 35%;">Email Address</td>
                <td style="padding: 12px 0; color: #2563eb; font-size: 14px; font-weight: 600;"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">Phone Number</td>
                <td style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 500;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">Experience</td>
                <td style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 500;">${experience}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">Employment Status</td>
                <td style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 500;">${isWorking}</td>
              </tr>
              ${isWorking === 'Yes' ? `
              <tr>
                <td style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">Current Position</td>
                <td style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 500;">${currentPosition}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">Current CTC</td>
                <td style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 500;">${currentCTC}</td>
              </tr>
              ` : ''}
              <tr>
                <td style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #64748b; font-size: 13px; font-weight: 600;">Expected CTC</td>
                <td style="padding: 12px 0; border-top: 1px solid #f1f5f9; color: #0f172a; font-size: 14px; font-weight: 500;">${expectedCTC}</td>
              </tr>
            </table>

            <!-- Resume attachment notification box -->
            <div style="margin-top: 30px; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 10px; padding: 14px 18px; display: flex; align-items: center;">
              <span style="color: #16a34a; font-size: 14px; font-weight: 600;">📎 Resume Document Attached Successfully</span>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; font-size: 12px; color: #94a3b8;">
              DropXcorp Automated System &bull; Confidential Candidate Record
            </p>
          </div>
        </div>
      </div>
    `;

    const mailOptions = {
      // Configures the sender to display the candidate's name and email directly
      from: `"${firstName} ${lastName}" <${email}>`,
      replyTo: email,
      to: process.env.EMAIL_USER, 
      subject: `New Application: ${role} - ${firstName} ${lastName}`,
      html: emailHTML,
      attachments: resumeFile ? [
        {
          filename: resumeFile.originalname,
          content: resumeFile.buffer, 
        }
      ] : []
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: 'Application sent successfully!' });

  } catch (error) {
    console.error('Error processing application:', error);
    res.status(500).json({ success: false, message: 'Failed to send application.' });
  }
});

const PORT = process.env.PORT || 5005;

const server = app.listen(PORT, () => {
  console.log(`✅ Backend Server securely running on port ${PORT}`);
});

server.on('error', (err) => {
  console.error('❌ Server failed to start:', err.message);
});