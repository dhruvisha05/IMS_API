const storage = require('node-persist');
const inquiry = require('../model/inquiry')
storage.init( /* options... */);
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'dhruvishagosai05@gmail.com',
      pass: 'frar drky rbcp vttq'
    }
  });
  function randomotp(){
    return Math.floor(100000 + Math.random() * 900000);
  }
exports.add_inquiry = async (req,res) =>{

        const otp =  randomotp();

        var mailOptions = {
          from: 'dhruvishagosai05@gmail.com',
          to: req.body.email,
          subject: 'Sending Email using Node.js',
          text: 'That was easy! '+otp
        };
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        })
        await storage.setItem('otp', otp);
      
        var data = await inquiry.create(req.body);
        res.status(200).json({
            status:" Insert inquiry",
            data
         })

};

exports.verify_inquiry = async (req, res) => {
  const { otp } = req.body;


   const storedOTP = await storage.getItem('otp');

   if (storedOTP && storedOTP === otp) {
     
       const updatedInquiry = await inquiry.findOneAndUpdate({verify : true});

            
            await storage.clear();

            res.status(200).json({
                status: "Inquiry Verified",
                data: updatedInquiry
            });
   } else {
       res.status(400).json({ 
        status: 'Invalid OTP. Inquiry creation failed.'
      });
    };
}

exports.get_inquirydata = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var data = await inquiry.find().populate("branch_id").populate("course_id").populate("reference_id").populate({
            path: 'inquiry_by',
            populate: [{ path: 'role' }, { path: 'branch' }]
        }).populate("status_id");
        res.status(200).json({
            data
        })
    } else {
        res.status(200).json({
            status: "only admin can delete student"
        })
    }
}


//inquiry delete
exports.inquiry_delete = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var id = req.params.id;
        var data = await inquiry.findByIdAndDelete(id, req.body);
        res.status(200).json({
            status: "inquiry delete"
        })
    } else {
        res.status(200).json({
            status: "only admin can delete student"
        })
    }
}

//inquiry update
exports.inquiry_update = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var id = req.params.id;
        var data = await inquiry.findByIdAndUpdate(id, req.body).populate("branch_id").populate("course_id").populate("reference_id").populate({
            path: 'inquiry_by',
            populate: [{ path: 'role' }, { path: 'branch' }]
        }
        ).populate("status_id");
        res.status(200).json({
            data,
            status: "inquiry update"
        })
    } else {
        res.stauts(200).json({
            stauts: "only admin can update student"
        })
    }
}

//inquiry find
exports.inquiry_update = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var id = req.params.id;
        var data = await inquiry.findById(id).populate("branch_id").populate("course_id").populate("reference_id").populate({
            path: 'inquiry_by',
            populate: [{ path: 'role' }, { path: 'branch' }]
        }
        ).populate("status_id");
        res.status(200).json({
            data,
            status: "inquiry update"
        })
    } else {
        res.stauts(200).json({
            stauts: "only admin can update student"
        })
    }
}


//inquiry searching 
exports.inquiry_search = async (req, res) => {
    const admin_id = await storage.getItem('login-admin');
    if (admin_id) {
        var search = req.query;
        var data = await inquiry.find(search);
        res.status(200).json({
            status: "data",
            data
        })
    } else {
        res.stauts(200).json({
            stauts: "only admin can search admin"
        })
    }
}

