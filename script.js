const students = [
  {
    name: "Aarav Sharma",
    marks: 91,
    class: "10th",
    address: "12 MG Road, Bengaluru"
  },
  {
    name: "Diya Patel",
    marks: 84,
    class: "9th",
    address: "45 Ring Road, Ahmedabad"
  },
  {
    name: "Rohan Verma",
    marks: 76,
    class: "8th",
    address: "21 Civil Lines, Lucknow"
  },
  {
    name: "Ananya Gupta",
    marks: 95,
    class: "12th",
    address: "88 Park Street, Kolkata"
  },
  {
    name: "Kabir Singh",
    marks: 67,
    class: "11th",
    address: "11 Rajendra Nagar, Patna"
  },
  {
    name: "Meera Nair",
    marks: 89,
    class: "10th",
    address: "90 Marine Drive, Kochi"
  },
  {
    name: "Arjun Reddy",
    marks: 72,
    class: "9th",
    address: "34 Jubilee Hills, Hyderabad"
  },
  {
    name: "Ishita Joshi",
    marks: 98,
    class: "12th",
    address: "76 MI Road, Jaipur"
  },
  {
    name: "Vivaan Mehta",
    marks: 81,
    class: "11th",
    address: "54 FC Road, Pune"
  },
  {
    name: "Sneha Kulkarni",
    marks: 74,
    class: "8th",
    address: "67 Shivaji Nagar, Pune"
  },
  {
    name: "Aditya Yadav",
    marks: 63,
    class: "7th",
    address: "19 Gomti Nagar, Lucknow"
  },
  {
    name: "Pooja Mishra",
    marks: 87,
    class: "10th",
    address: "29 Ashok Nagar, Bhopal"
  },
  {
    name: "Rahul Das",
    marks: 79,
    class: "9th",
    address: "56 GS Road, Guwahati"
  },
  {
    name: "Neha Kapoor",
    marks: 93,
    class: "12th",
    address: "10 Model Town, Ludhiana"
  },
  {
    name: "Karan Malhotra",
    marks: 69,
    class: "11th",
    address: "31 Sector 22, Chandigarh"
  },
  {
    name: "Sanya Roy",
    marks: 82,
    class: "10th",
    address: "17 Salt Lake, Kolkata"
  },
  {
    name: "Harsh Vardhan",
    marks: 77,
    class: "8th",
    address: "44 Bailey Road, Patna"
  },
  {
    name: "Nikhil Jain",
    marks: 86,
    class: "9th",
    address: "22 Vijay Nagar, Indore"
  },
  {
    name: "Tanya Bansal",
    marks: 94,
    class: "12th",
    address: "41 Rajouri Garden, Delhi"
  },
  {
    name: "Yash Agarwal",
    marks: 73,
    class: "11th",
    address: "61 Aliganj, Lucknow"
  },
  {
    name: "Ritika Sen",
    marks: 88,
    class: "10th",
    address: "32 Hazra Road, Kolkata"
  },
  {
    name: "Mohit Kumar",
    marks: 64,
    class: "9th",
    address: "15 Gandhi Maidan, Patna"
  },
  {
    name: "Aisha Khan",
    marks: 90,
    class: "12th",
    address: "39 Banjara Hills, Hyderabad"
  },
  {
    name: "Dev Chauhan",
    marks: 71,
    class: "8th",
    address: "26 Navrangpura, Ahmedabad"
  },
  {
    name: "Siya Arora",
    marks: 96,
    class: "11th",
    address: "50 Sector 17, Chandigarh"
  },
  {
    name: "Aryan Mishra",
    marks: 80,
    class: "10th",
    address: "81 Civil Lines, Prayagraj"
  },
  {
    name: "Khushi Sharma",
    marks: 83,
    class: "9th",
    address: "37 Hazratganj, Lucknow"
  },
  {
    name: "Ritesh Pandey",
    marks: 68,
    class: "8th",
    address: "11 Kankarbagh, Patna"
  },
  {
    name: "Nandini Iyer",
    marks: 92,
    class: "12th",
    address: "64 Anna Nagar, Chennai"
  },
  {
    name: "Aman Sinha",
    marks: 75,
    class: "11th",
    address: "42 Fraser Road, Patna"
  },
  {
    name: "Priyanshi Gupta",
    marks: 97,
    class: "10th",
    address: "24 Gomti Nagar, Lucknow"
  },
  {
    name: "Shivam Tiwari",
    marks: 70,
    class: "9th",
    address: "36 Alambagh, Lucknow"
  },
  {
    name: "Rhea Dutta",
    marks: 89,
    class: "12th",
    address: "55 Ballygunge, Kolkata"
  },
  {
    name: "Manish Verma",
    marks: 66,
    class: "8th",
    address: "91 Civil Lines, Kanpur"
  },
  {
    name: "Avni Chawla",
    marks: 91,
    class: "11th",
    address: "48 Janakpuri, Delhi"
  },
  {
    name: "Sahil Jain",
    marks: 79,
    class: "10th",
    address: "20 Palasia, Indore"
  },
  {
    name: "Tanvi Desai",
    marks: 85,
    class: "9th",
    address: "18 Law Garden, Ahmedabad"
  },
  {
    name: "Pranav Kulkarni",
    marks: 74,
    class: "8th",
    address: "84 Camp Area, Pune"
  },
  {
    name: "Ira Banerjee",
    marks: 93,
    class: "12th",
    address: "72 Howrah Road, Kolkata"
  },
  {
    name: "Om Prakash",
    marks: 62,
    class: "7th",
    address: "14 MG Road, Bhopal"
  },
  {
    name: "Sakshi Yadav",
    marks: 88,
    class: "10th",
    address: "49 Raj Nagar, Ghaziabad"
  },
  {
    name: "Deepak Rana",
    marks: 77,
    class: "9th",
    address: "27 Clement Town, Dehradun"
  },
  {
    name: "Anushka Singh",
    marks: 99,
    class: "12th",
    address: "66 Hazratganj, Lucknow"
  },
  {
    name: "Gaurav Saxena",
    marks: 69,
    class: "11th",
    address: "40 Civil Lines, Bareilly"
  },
  {
    name: "Muskan Ali",
    marks: 84,
    class: "10th",
    address: "58 Charminar Road, Hyderabad"
  },
  {
    name: "Varun Kapoor",
    marks: 72,
    class: "9th",
    address: "35 Sector 15, Noida"
  },
  {
    name: "Bhavna Joshi",
    marks: 90,
    class: "12th",
    address: "13 Race Course Road, Indore"
  },
  {
    name: "Kunal Srivastava",
    marks: 78,
    class: "11th",
    address: "93 Gomti Nagar, Lucknow"
  },
  {
    name: "Shruti Mishra",
    marks: 86,
    class: "10th",
    address: "73 Ashiyana, Lucknow"
  },
  {
    name: "Abhishek Roy",
    marks: 81,
    class: "9th",
    address: "60 VIP Road, Kolkata"
  }
];

const container = document.getElementById("container");
const search = document.querySelector(".search");


const displayStudents = (studentList) => {
    container.innerHTML = studentList
        .map(student => `
            <div class="card">
                <h3>${student.name}</h3>
                <p><strong>Marks:</strong> ${student.marks}%</p>
                <p><strong>Class:</strong> ${student.class}</p>
                <p><strong>Address:</strong> ${student.address}</p>
            </div>
        `)
        .join("");
};


displayStudents(students);


search.addEventListener("keyup", () => {
    const text = search.value.toLowerCase();
    const filteredStudents = students.filter(student =>
        student.name.toLowerCase().includes(text)
    );
    displayStudents(filteredStudents);
});