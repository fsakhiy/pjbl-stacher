// const { PrismaClient } = require("@prisma/client");
// const {ObjectId} = require('mongodb')
// const objectId = new ObjectId()
// const randomItem = (items) => items[Math.floor(Math.random() * items.length)];
// // import PrismaClient from "@prisma/client";
// const prisma = new PrismaClient()
// const twoWordNames = [
//   "John Doe",
//   "Jane Smith",
//   "Robert Johnson",
//   "Susan Lee",
//   "David Kim",
//   "Jennifer Brown"
// ];

// const addresses = [
//   "123 Main St, Anytown, USA",
//   "456 High St, Somewhere, USA",
//   "789 Elm St, Anywhere, USA",
//   "321 Oak St, Nowhere, USA",
//   "654 Maple St, Everywhere, USA"
// ];

// const cities = [
//   "New York City",
//   "Los Angeles",
//   "Chicago",
//   "Houston",
//   "Phoenix",
//   "Philadelphia",
//   "San Antonio",
//   "San Diego",
//   "Dallas",
//   "San Jose"
// ];

// const phoneNumbers = [
//   "123-456-7890",
//   "234-567-8901",
//   "345-678-9012",
//   "456-789-0123",
//   "567-890-1234"
// ];

// const religions = [
//   "Islam",
//   "Kristen",
//   "Katolik",
//   "Hindu",
//   "Buddha"
// ];

// const universities = [
//   "Harvard University",
//   "MIT",
//   "Stanford University",
//   "University of Cambridge",
//   "University of Oxford",
//   "California Institute of Technology",
//   "Princeton University",
//   "Yale University",
//   "University of Chicago",
//   "Imperial College London"
// ];

// for (let i = 0; i < 20; i++) {
//   prisma.staff.create({
//     _id: objectId, // generate a random ObjectId as _id
//     nama: randomItem(twoWordNames), // choose a random 2 word name
//     dob: new Date(+(new Date()) - Math.floor(Math.random()*10000000000)), // generate a random date within the last 10000 days
//     alamat: randomItem(addresses), // choose a random address
//     nip: Math.floor(Math.random()*900000000000) + 100000000000 + "", // generate a random 12 digit number as a string
//     pangkat: "something", // replace with your desired value for pangkat
//     golongan: "something", // replace with your desired value for golongan
//     tempatLahir: randomItem(cities), // choose a random city
//     jenisKelamin: randomItem(["Laki-laki", "Perempuan"]), // choose either "Laki-laki" or "Perempuan" randomly
//     agama: randomItem(religions), // choose a random religion
//     kawin: Math.random() < 0.5, // choose either true or false randomly
//     kota: randomItem(cities), // choose a random city
//     jabatan: randomItem(["Guru", "Staff"]), // choose either "Guru" or "Staff" randomly
//     nomor: randomItem(phoneNumbers), // choose a random phone number as a string
//     pegawaiTetap: Math.random() < 0.5, // choose either true or false randomly
//     pendidikan: [randomItem(universities), randomItem(universities)].slice(0, Math.floor(Math.random() * 3) + 1), // choose a random number of universities between 1 and 3, and select that many from the universities array
//     photo: "/placeholder.png" // replace with your desired photo URL
//   });
// }

const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function createPeople() {
  for (let i = 0; i < 20; i++) {
    const nama = 'Random Name ' + i;
    const dob = new Date();
    const alamat = 'Random Address ' + i;
    const nip = '123456789012';
    const pangkat = 'something';
    const golongan = 'something';
    const tempatLahir = 'Random City ' + i;
    const jenisKelamin = i % 2 === 0 ? 'Laki-laki' : 'Perempuan';
    const agama = ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha'][Math.floor(Math.random() * 5)];
    const kawin = Math.random() < 0.5;
    const kota = 'Some Random City ' + i;
    const jabatan = i % 2 === 0 ? 'Guru' : 'Staff';
    const nomor = '1234567890';
    const pegawaiTetap = Math.random() < 0.5;
    const pendidikan = ['Random University 1', 'Random University 2', 'Random University 3'].slice(0, Math.floor(Math.random() * 3) + 1);
    const photo = '/placeholder.png';

    await prisma.staff.create({
      data: {
        nama,
        dob,
        alamat,
        nip,
        pangkat,
        golongan,
        tempatLahir,
        jenisKelamin,
        agama,
        kawin,
        kota,
        jabatan,
        nomor,
        pegawaiTetap,
        pendidikan: {
          create: pendidikan.map((nama) => ({ nama })),
        },
        photo,
      },
    });
  }

  console.log('20 people created!');
}

createPeople().finally(() => prisma.$disconnect());