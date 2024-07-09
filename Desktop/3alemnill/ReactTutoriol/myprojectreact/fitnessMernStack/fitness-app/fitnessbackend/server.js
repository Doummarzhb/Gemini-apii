const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb://localhost:27017/fitnessdb';

app.use(cors());
app.use(express.json());

// اتصال بقاعدة البيانات
mongoose.connect(MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// نماذج المستخدمين
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String,   enum: ['user', 'admin'], required: true },
  
 
 
});

const User = mongoose.model('User', userSchema);


app.post('/api/auth/signup', async (req, res) => {
  const { name, email, password , role} = req.body;
  try {
    // const salt = await bcrypt.genSalt(10);
    // const hashedPassword = await bcrypt.hash(password, salt);
    const userRole = role  ;
    const newUser = new User({ name, email, password, role });
  
    // const newUser = new User({ name, email, password: hashedPassword, role });
    await newUser.save();

    const token = jwt.sign({ id: newUser._id , role: newUser.role}, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

app.post('/api/auth/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ error: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id ,role: user.role}, 'your_jwt_secret', { expiresIn: '1h' });
    // const token = jwt.sign({ id: user._id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});
// const workoutProgramSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//   });
  
//   const WorkoutProgram = mongoose.model('WorkoutProgram', workoutProgramSchema);
  
  // مسارات برامج التمارين
//   app.get('/api/workoutPrograms/all', async (req, res) => {
//     try {
//       const programs = await WorkoutProgram.find();
//       res.json(programs);
//     } catch (error) {
//       res.status(500).json({ error: 'Server error' });
//     }
//   });
  
//   app.post('/api/workoutPrograms/add', async (req, res) => {
//     const { name, description } = req.body;
//     try {
//       const newProgram = new WorkoutProgram({ name, description });
//       await newProgram.save();
//       res.status(201).json(newProgram);
//     } catch (error) {
//       res.status(500).json({ error: 'Server error' });
//     }
//   });
  
//   app.delete('/api/workoutPrograms/:id', async (req, res) => {
//     const { id } = req.params;
//     try {
//       await WorkoutProgram.findByIdAndDelete(id);
//       res.status(200).json({ message: 'Program deleted successfully' });
//     } catch (error) {
//       res.status(500).json({ error: 'Server error' });
//     }
//   });



//workoud programs
 
const workoutProgramSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, enum: ['Male', 'Female'], required: true },
  programType: { type: String, enum: ['Fitness', 'Bicycle', 'Boxing', 'CrossFit'], required: true },
  hours: { type: Number, required: true },
  days: { type: String, required: true },
});

const WorkoutProgram = mongoose.model('WorkoutProgram', workoutProgramSchema);

// Routes
app.post('/api/workoutPrograms/add', async (req, res) => {
  const { fullName, age, gender, programType, hours, days } = req.body;
  console.log('Received data:', req.body);  // Log incoming data
  try {
    const newProgram = new WorkoutProgram({ fullName, age, gender, programType, hours, days });
    await newProgram.save();
    res.status(200).json(newProgram);
  } catch (error) {
    console.error('Error saving program:', error);  // Log error
    res.status(500).json({ error: 'Server error' });
  }
});

app.get('/api/workoutPrograms/all', async (req, res) => {
  try {
    const programs = await WorkoutProgram.find();
    console.log('Fetched programs:', programs);  // Log fetched programs
    res.json(programs);
  } catch (error) {
    console.error('Error fetching programs:', error);  // Log error
    res.status(500).json({ error: 'Failed to fetch programs' });
  }
});
  //training session
  const trainingSessionSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    selectedTrainer: { type: String, required: true },
    dateTime: { type: Date, required: true },
  });
  
  const TrainingSession = mongoose.model('TrainingSession', trainingSessionSchema);
  
  // مسار API لجلسات التدريب
  app.post('/api/training/sessions', async (req, res) => {
    const { name, email, phone, selectedTrainer, dateTime } = req.body;
    try {
      const newSession = new TrainingSession({ name, email, phone, selectedTrainer, dateTime });
      await newSession.save();
      res.status(200).json(newSession);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });






  //nutrition plan 
  const nutritionPlanSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    months: [String],
    imageUrl: String,
    hot: { type: Boolean, default: false }
  });
  
  const NutritionPlan = mongoose.model('NutritionPlan', nutritionPlanSchema);
  
  app.post('/api/nutrition/plans/add', async (req, res) => {
    const { title, description,imageUrl, months } = req.body;
  
    try {
      const newPlan = new NutritionPlan({ title, description,imageUrl, months });
      await newPlan.save();
      res.status(201).json(newPlan);
    } catch (error) {
      console.error('Error adding nutrition plan:', error);
      res.status(500).json({ message: 'Error adding nutrition plan', error: error.message });
    }
  });
  
  app.get('/api/nutrition/plans', async (req, res) => {
    try {
      const plans = await NutritionPlan.find();
      res.status(200).json(plans);
    } catch (error) {
      console.error('Error fetching nutrition plans:', error);
      res.status(500).json({ message: 'Error fetching nutrition plans', error: error.message });
    }
  });
  // Delete a plan
app.delete('/api/nutrition/plans/:id', async (req, res) => {
  try {
    const plan = await Plan.findByIdAndDelete(req.params.id);
    if (!plan) return res.status(404).json({ message: 'Plan not found' });
    res.json({ message: 'Plan deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting plan' });
  }
});

  const reservationSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    selectedMonth: { type: String, required: true },
    salary: { type: String, required: true },
  });
  
  const Reservation = mongoose.model('Reservation', reservationSchema);
  
  // مسار API لإضافة حجز جديد
  app.post('/api/reservations', async (req, res) => {
    const { fullName, email, phone, selectedMonth, salary } = req.body;
    try {
      const newReservation = new Reservation({ fullName, email, phone, selectedMonth, salary });
      await newReservation.save();
      res.status(200).json(newReservation);
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });



  //bmi
  const bmiSchema = new mongoose.Schema({
    height: { type: Number, required: true },
    weight: { type: Number, required: true },
    bmi: { type: Number, required: true },
    message: { type: String, required: true },
    date: { type: Date, default: Date.now },
  });
  
  const BMI = mongoose.model('BMI', bmiSchema);

  app.post('/api/nutrition/calculateBMI', (req, res) => {
    const { height, weight } = req.body;
    if (!height || !weight) {
      return res.status(400).json({ message: 'Height and weight are required' });
    }
  
    const heightInMeters = height / 100;
    const bmi = weight / (heightInMeters * heightInMeters);
    let message = '';
  
    if (bmi < 18.5) {
      message = 'You are underweight.';
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      message = 'You have a normal weight.';
    } else if (bmi >= 25 && bmi <= 29.9) {
      message = 'You are overweight.';
    } else {
      message = 'You are obese.';
    }
  
    res.json({ bmi: bmi.toFixed(2), message });
  });




//hayde lal hemeye 
  const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access denied' });
  
    try {
      const verified = jwt.verify(token, 'your_jwt_secret');
      req.user = verified;
      next();
    } catch (error) {
      res.status(400).json({ message: 'Invalid token' });
    }
  };



  // مسار الملف الشخصي  kelchi baad mna khaso bel profile la e2dar jeb
app.get('/api/user/profile', authenticateToken, async (req, res) => {
    try {
      const user = await User.findById(req.user.id).select('-password');
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });
  
  // مسارات الحجوزات
  app.get('/api/reservations', authenticateToken, async (req, res) => {
    try {
      const reservations = await Reservation.find();
      res.json(reservations);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });
  app.get('/api/nutrition', authenticateToken, async (req, res) => {
    try {
      const nutritionPlans = await NutritionPlan.find();
      res.json(nutritionPlans);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });
  app.get('/api/training/sessions', authenticateToken, async (req, res) => {
    try {
      const trainingSessions = await TrainingSession.find();
      res.json(trainingSessions);
    } catch (error) {
      console.error(error);
      res.status(500).send('Server Error');
    }
  });
  app.delete('/api/reservations/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await Reservation.findByIdAndDelete(id);
      res.status(200).json({ message: 'Reservation deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  app.delete('/api/nutrition/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await NutritionPlan.findByIdAndDelete(id);
      res.status(200).json({ message: 'Nutrition plan deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });
  app.delete('/api/training/sessions/:id', async (req, res) => {
    const { id } = req.params;
    try {
      await TrainingSession.findByIdAndDelete(id);
      res.status(200).json({ message: 'Training session deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
  });

//la ychuf admin hayda


const adminBookingSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    selectedPlan: { type: mongoose.Schema.Types.ObjectId, ref: 'NutritionPlan', required: true },
    selectedSession: { type: mongoose.Schema.Types.ObjectId, ref: 'TrainingSession', required: true },
    // يمكنك إضافة المزيد من الحقول حسب الحاجة
  });
  
  module.exports = mongoose.model('AdminBooking', adminBookingSchema);  



  //powerrrrrrrrrrrrrrrrrrrrrrrrrrr
  const ProteinPowderSchema = new mongoose.Schema({
    name: String,
    image: String,
    price: String,
    weight: String,
  });
  
  const ProteinPowder = mongoose.model('ProteinPowder', ProteinPowderSchema);
  
  // GET all powders
  app.get('/api/powders', async (req, res) => {
    try {
      const powders = await ProteinPowder.find();
      res.json(powders);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch powders' });
    }
  });
  
  // POST a new powder
  app.post('/api/powders', async (req, res) => {
    try {
      const newPowder = new ProteinPowder(req.body);
      const savedPowder = await newPowder.save();
      res.json(savedPowder);
    } catch (error) {
      res.status(500).json({ message: 'Failed to add powder' });
    }
  });
  
  // PUT to update a powder
  app.put('/api/powders/:id', async (req, res) => {
    try {
      const updatedPowder = await ProteinPowder.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedPowder);
    } catch (error) {
      res.status(500).json({ message: 'Failed to update powder' });
    }
  });
  
  // DELETE a powder
  app.delete('/api/powders/:id', async (req, res) => {
    try {
      await ProteinPowder.findByIdAndDelete(req.params.id);
      res.json({ message: 'Powder deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Failed to delete powder' });
    }
  });




  const personalizedSchema = new mongoose.Schema({
    name: String,
    personName: String,
    gender: String,
    schedule: Array,
  });
  
  const Personalized = mongoose.model('Personalized', personalizedSchema);
  
  // المسارات
  app.post('/api/programs', async (req, res) => {
    const { name, gender, personName,schedule } = req.body;
  
    const newProgram = new Personalized({ name, gender, personName,schedule });
    try {
      const savedProgram = await newProgram.save();
      res.status(201).json(savedProgram);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
  app.get('/api/programs', async (req, res) => {
    try {
      const programs = await Personalized.find();
      res.json(programs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  app.put('/api/programs/:id', async (req, res) => {
    const { name, personName, gender, schedule } = req.body;
    try {
      const updatedProgram = await Personalized.findByIdAndUpdate(
        req.params.id,
        { name, personName, gender, schedule },
        { new: true }
      );
      res.json(updatedProgram);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  app.delete('/api/programs/:id', async (req, res) => {
    try {
      await Personalized.findByIdAndDelete(req.params.id);
      res.json({ message: 'Program deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });




  

  const weightGainProgramSchema = new mongoose.Schema({
    title: String,
    description: String,
    duration: Number,
    fullName:String
  });
  
  const WeightGainProgram = mongoose.model('WeightGainProgram', weightGainProgramSchema);
  
  // Routes
  app.get('/api/weightgain/programs', async (req, res) => {
    try {
      const programs = await WeightGainProgram.find();
      res.json(programs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });
  
  app.post('/api/weightgain/programs/add', async (req, res) => {
    const program = new WeightGainProgram({
      fullName:req.body.fullName,
      title: req.body.title,
      description: req.body.description,
      duration: req.body.duration,
      
    });
  
    try {
      const newProgram = await program.save();
      res.status(201).json(newProgram);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  });
  
 // Delete a program
app.delete('/api/weightgain/programs/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await WeightGainProgram.findByIdAndDelete(id);
    res.json({ message: 'Program deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
// Update a program (optional)
app.put('/api/weightgain/programs/:id', async (req, res) => {
  const { id } = req.params;
  const { title, description, duration } = req.body;

  try {
    const updatedProgram = await WeightGainProgram.findByIdAndUpdate(id, { title, description, duration }, { new: true });
    res.json(updatedProgram);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
   



//contact us db 
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;


app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).json({ message: 'Contact form submitted successfully' });
  } catch (error) {
    console.error('Error saving contact:', error);
    res.status(500).json({ error: 'Failed to submit contact form' });
  }
});







//run
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
