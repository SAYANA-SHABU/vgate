const express=require("express")
const app = express()
const QRCode = require('qrcode');
app.use(express.json());

app.post('/register', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.send({ message: 'Student registered successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Registration failed', error });
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { admissionNo, password } = req.body;
  const student = await Student.findOne({ admissionNo, password });
  if (student) {
    res.send({ message: 'Login successful', student });
  } else {
    res.status(401).send({ message: 'Invalid credentials' });
  }
});

// Form fill route (purpose + date)
app.post('/form-fill/:id', async (req, res) => {
  const { id } = req.params;
  const { purpose, date } = req.body;
  try {
    await Student.findByIdAndUpdate(id, { purpose, date });
    res.send({ message: 'Form updated successfully' });
  } catch (error) {
    res.status(500).send({ message: 'Form update failed', error });
  }
});

// QR Code generation route
app.post('/generate-qr/:id', async (req, res) => {
  try {
    const qrData = `StudentID: ${req.params.id}`;
    const qrImage = await QRCode.toDataURL(qrData);
    res.send({ qrImage });
  } catch (error) {
    res.status(500).send({ message: 'QR generation failed', error });
  }
});

app.listen(2025,() => {
  console.log("Port is running ")
})