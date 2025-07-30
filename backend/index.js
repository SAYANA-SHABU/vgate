const express=require("express")
const app = express()
const QRCode = require('qrcode');
app.use(express.json());
const Student = require('./models/student');
var cors = require('cors')
app.use(cors());
const multer = require('multer');
const connectDB =require('./connection')
connectDB


const storage = multer.memoryStorage(); // Or use diskStorage if saving to disk
const upload = multer({ storage });


app.post('/register', upload.single('image'), async (req, res) => {
  try {
    const { admNo, name, dept, sem, tutorName, phone, email, password } = req.body;

    const student = new Student({
      admNo,
      name,
      dept,
      sem,
      tutorName,
      phone,
      email,
      password,
      image: req.file ? req.file.buffer : undefined, // Save as Buffer
    });

    await student.save();
    res.send({ message: 'Student registered successfully' });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).send({ message: 'Registration failed', error });
  }
});

// Login route
app.post('/login', async (req, res) => {
   const admNo = Number(req.body.admNo); 
    const { password } = req.body;
  console.log("Login attempt with:", admNo, password);

  const student = await Student.findOne({ admNo, password });
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

app.listen(5000,() => {
  console.log("Port is running ")
})
