require('dotenv').config()
const PouchDB = require('pouchdb-core')
PouchDB.plugin(require('pouchdb-adapter-http'))
const db = new PouchDB(`${process.env.COUCH_URL}${process.env.COUCH_DBNAME}`)

db
  .bulkDocs([
    {
      _id: 'history_daytime-group-carriage-tour-residential-district',
      tourName: 'Daytime Group Carriage Tour Residential District',
      companyName: 'Palmetto Carriage',
      address: '8 Guignard Street, Charleston, SC 29401',
      phone: '859-853-6125',
      price: 26,
      duration: '1 hour',
      type: 'carriage',
      desc:
        'Palmetto Carriage Company is the oldest carriage tour company in town! Come tour historic downtown Charleston by mule or horse-drawn carriage with some of the most experienced personnel in the Charleston carriage industry. We are a family-owned company and pride ourselves on providing authentic carriage tours that your family and friends will remember for years to come!',
      img:
        'data:image/jpeg;base64,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',
      linkToBookOnline: 'https://palmettocarriage.com/book-your-tour/',
      schedule: [
        {
          day: 'Monday',
          open: true,
          time: '9:00AM-5:00pm'
        },
        {
          day: 'Tuesday',
          open: true,
          time: '9:00AM-5:00pm'
        },
        {
          day: 'Wednesday',
          open: true,
          time: '9:00AM-5:00pm'
        },
        {
          day: 'Thursday',
          open: true,
          time: '9:00AM-5:00pm'
        },
        {
          day: 'Friday',
          open: true,
          time: '9:00AM-5:00pm'
        },
        {
          day: 'Saturday',
          open: true,
          time: '9:00AM-5:00pm'
        },
        {
          day: 'Sunday',
          open: true,
          time: '9:00AM-5:00pm'
        }
      ],
      options: [
        'history',
        'carriage',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ]
    },
    {
      _id: 'history_historic-charleston-carriage-tour',
      tourName: 'Historic Charleston Carriage Tour',
      companyName: 'Old South Carriage Co.',
      address: '14 Anson St. Charleston, SC 29401',
      phone: '859-723-9712',
      price: 26,
      duration: '1 hour',
      type: 'carriage',
      desc:
        'Our one-hour narrated carriage tour covers more than 2.5 miles and 30 blocks of historic Charleston. It really is the best way to see the “Holy City” and learn about its rich and vast historical areas and attractions.',
      img:
        'data:image/jpeg;base64,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',
      linkToBookOnline:
        'https://www.oldsouthcarriage.com/historic-charleston-carriage-tours/',
      schedule: [
        {
          day: 'Monday',
          open: true,
          time: '9:00AM-5:00pm'
        },
        {
          day: 'Tuesday',
          open: true,
          time: '9:00AM-5:00pm'
        },
        {
          day: 'Wednesday',
          open: true,
          time: '9:00AM-5:00pm'
        },
        {
          day: 'Thursday',
          open: true,
          time: '9:00AM-5:00pm'
        },
        {
          day: 'Friday',
          open: true,
          time: '9:00AM-5:00pm'
        },
        {
          day: 'Saturday',
          open: true,
          time: '9:00AM-5:00pm'
        },
        {
          day: 'Sunday',
          open: true,
          time: '9:00AM-5:00pm'
        }
      ],
      options: [
        'history',
        'carriage',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ]
    },
    {
      _id: 'haunted_haunted-carriage-tour',
      tourName: 'Haunted Carriage Tour',
      companyName: 'Old South Carriage Co.',
      address: '14 Anson St. Charleston, SC 29401',
      phone: '859-723-9712',
      price: 26,
      duration: '40 minutes',
      type: 'carriage',
      desc:
        'On this 40-minute twilight tour, discover where spirits are reported to linger. A licensed guide will regale you with spooky tales from Charleston’s long history as you pass haunted alleys, graveyards, churches, hotels – and even a dungeon.',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/a/a5/Phillidelphia_Alley_Charleston_SC.jpg',
      linkToBookOnline:
        'https://www.oldsouthcarriage.com/historic-charleston-carriage-tours/',
      schedule: [
        {
          day: 'Monday',
          open: true,
          time: null
        },
        {
          day: 'Tuesday',
          open: true,
          time: null
        },
        {
          day: 'Wednesday',
          open: true,
          time: null
        },
        {
          day: 'Thursday',
          open: true,
          time: null
        },
        {
          day: 'Friday',
          open: true,
          time: null
        },
        {
          day: 'Saturday',
          open: true,
          time: null
        },
        {
          day: 'Sunday',
          open: true,
          time: null
        }
      ],
      options: [
        'haunted',
        'carriage',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ]
    },
    {
      _id: 'adventure_dolphin-safari',
      tourName: 'Dolphin Safari',
      companyName: 'Charleston SUP Safaris',
      address: '83 Center Street, Folly Beach, SC 29439',
      phone: '843-817-7877',
      price: 26,
      duration: '2 hours',
      type: 'adventure',
      desc:
        'This 2-hour introductory paddle on the Edge of America will get you into the basics of SUP, all in the calm flatwater of the Folly River. We’ll explore alongside the numerous beautiful native birds and bottlenose dolphins.  We’ll go with the flow, following the tides and wind direction for a great beginning paddle. At low tide we visit a private beach and go for a swim! Group photo is taken at the end of the tour, which will be posted on our social media pages.',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCqGBKz163pDraQUe7k2TP-27P_ZLrayxz2jlSghP32nA0a-Hltg',
      linkToBookOnline: 'http://www.charlestonsupsafaris.com/tours-lesson.html',

      schedule: [
        {
          day: 'Monday',
          open: true,
          time: '9:00am, 12:00pm, 6:30pm'
        },
        {
          day: 'Tuesday',
          open: true,
          time: '9:00am, 12:00pm, 6:30pm'
        },
        {
          day: 'Wednesday',
          open: true,
          time: '9:00am, 12:00pm, 6:30pm'
        },
        {
          day: 'Thursday',
          open: true,
          time: '9:00am, 12:00pm, 6:30pm'
        },
        {
          day: 'Friday',
          open: true,
          time: '9:00am, 12:00pm, 6:30pm'
        },
        {
          day: 'Saturday',
          open: true,
          time: '9:00am, 12:00pm, 6:30pm'
        },
        {
          day: 'Sunday',
          open: true,
          time: '9:00am, 12:00pm, 6:30pm'
        }
      ],
      options: [
        'adventure',
        'surf',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ]
    },
    {
      _id: 'history_historic-charlreston-walking-tour',
      tourName: 'Historic Charleston Walking Tour',
      companyName: 'Free Tours by Foot',
      address: '107 Ashley Ave., Charleston, SC 29401',
      phone: '843-580-4019',
      price: 3,
      duration: '2 hours',
      type: 'walking',
      desc:
        'Join Free Tours by Foot as we cross cobble stone streets and cut through back alleys, all while discovering the hidden gems, beautiful mansions, elegant churches not to mention a few graveyards of Charleston’s historic center.  It’s the epic story of Charleston’s role in American and world history.  It is a name-your-price tour, with a minimum $3 charge',
      img:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMVFhUXFx4YGBcXGRkYGBcYGB0dHRgdFxkaHSggGxolHRgYITEhJSktLi4uFx8zODMtNygtLisBCgoKDg0OGxAQGi0lHyUvLi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIALgBEwMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAIDBAYHAf/EAEcQAAECAwQHBQQIBQIFBQEAAAECEQADIQQSMUEFBiJRYXGBEzKRobFCwdHwBxQjJFJicuGCkrLC8VOiM2Nzg9IWNUPT4hX/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBQQG/8QALREAAgIBAwMCBAYDAAAAAAAAAAECEQMSITEEQVEiMhOhsfBhcYGR0fEjM1L/2gAMAwEAAhEDEQA/AOdyVqlIVeZy38SQFMKZOR0Bi5Yx93B4HzUYGduQAUlnJGGAABID4B1QVnrIlIu3agOCCxo7DMVaNktmzGT3SKssV3Y48onslnUpTbkqVwZKSaenWI5MxKibx7Ms233XODKHvgno6yLliYVOAUMGLpLrQHBFDQqhFEOirMVTAEgknAcTQesN1x0T9XKUMkEl9nKgp4vGw+j6QDPmKbBDeNQ38sAvpGXetyE5XvVcNPciXCAuiVrK1yySUpJAJ4FseUQaZJl7SQKEEjBwCD6gQT1OkdowJa+ol+Y/aCem9AFhfTeQ4cjBnzzEZ5Gky4WB7HrMoTVzFupEwpU7PQJSnoaVyjZ6OnSpyb0tYUPMcxGLsVnlmWhLsbrgHccGiNeiVS1dpKUpCx7SaeO/rG2PNKCrsRPFGX5mw1gtPZS7qD9rMoj8o9pZ5DzIgbYNPGTS0G/L/wBQDbSPzAd4cRXnAwaUClhVqQq8wBmy6ggYOjLE92Cel5ss2KYZVxQKpYdNaEub2eQx4Qp55uVrgqOKKjT5NbZyiYkLlqSpJqFAuD1hws8cn0Vb51lJXIWwJ2paqoV0yPER0LVnT6bWSllImJDrlnw2VYEPG0epi1bMngldI0FmlBNScabj0MSW1KRKmFP4DXPDM5xFOtUoNfWlzQAFySMkgVJ5RVt2k0BBySzF92YofnhHLk55ZuTOrHRihpTBUqSVD1JJZ91Kk8BWKdr7FKgHJWSOhpkKJHj0hT7dMm0QChGF40LflGQh1nsiUhmcnEnEvxjaGNR37nmnkctuw0w2HEfPz81hNHfhJSipI4846W0MMeND2hXYokE6cQ4SMsfCATk4sNxORzfypBjWFVUjNj64mBDhqDFjwLUwxxEcDrH/AJ5ffY6OFehB2xzwJKTgxYsxArh7oIAQDRNAlLSAXJBwqX4dIJaIW6PPxj3dL1NyjDyvmrPPlx0nL8S20eNEjR40dI8oxo8aJGhNAMiIhhh6jDCesZymXGJVtC6sPnl0imt7z/5L1bCCHZZ55GGXQd3lX49I509Unb2PZHSlSKaUkUvHz90KLCpFe8fKFGej8fmVqMmvuoz7x8bo/tg1bSEhA4ejCBEyzLBQkpOAB3OVKxOGBBgppGekqYMWoeB3QuwdxiQCOZz6xe0fZ1y03kqKUqURdxSboBOyaNtCB6QCBVqmh6Z/GCqJakyZb5qWqhcewBUUPdMQUbT6PZxMxY7MAKAdYJu0LAMcCb5zyjD65zntr/hSFeCb0dK1MTdsQVvvq8Crz2Y5drLaHtU8GqQDTkm6GOWQhw5ZM+wW+j2X3DuCj6j3xrNZ13bOs/JYE+7ygBqEgO4DAIp1umCuu6ms5G+niG/ujDL7zXHwc6tKV9oEpGCUjwSMYs2TSikm6atQg5cjlBESgZgoMTXkGjO21IMxZ/MajHGNXGt0JS8mmlqlzRuO4/NYgXowpN+WopVvTQ9Rn1eBUlKkSgtyXUzcPkQU0dpYFgouNxofGFf/AEVXgrzZQVSYi6f9SUM/zSsP5SOUabUGzJ7Sc81JCglrimUalwQwWlnFPVoUuyIm9xQJ/CqiumR8YdY9BHtpRYpurCicCAnax3Fm6wmlyNN8Db8yWolIvpLhidoPk+acMfOEmSVm9NLnJPsp5DMxUXpZaZhE9NFEkKHHliOVeEEZagReSQQcxWKESCK80lKiRgwJBzy6ftFlMQ2gs/6cesIEeWs3E3lAgXb2DliHBYbwfSBMzS/4UdVU8g58WjRaSSDd4y0cfZHlA+3avG4JsgFSCHKMVoOY/MAevrBPqsuONQ4NcPTYck7nyUTKtBKFZFIWABQg1F7mxH+IIIIIBGBDiLyLOe0sgLgiUhK04FrxcKG6vR+UQWSzKUAJaFKBDgpSSk/xd2r749/SZPS3KXjk5/VQ9VRXngBaeUAU0qxrwJD+kAUpoWUzs27HLPN3jQ6zWVloC9lSReuvvwvM/EtGftCMGZIGTMCOnryjmdVJSzNp3/RthTjBJkksqUlRyYYhi+L8aGCOgprLKXDN5+EULKtyxchXN0li7ZnruiXRbpmJJU9cq0O8xGKenJF+GOcbi0alo8aHKUAQN7+TQ29t3fyv5x9G5pfQ5lMTR40S3Y8aKEQrpAq224pW12mPznBpoC6zyfswtiWNamMOoUtDcWa4WtVMmk2lKw+G/wB2MKbXe3HOMzo7SRBBFaV4gHxjUSp4mB0ni249I8uHL8RU+fqbzjpdojUnh5/tChzH5Hwj2NdK+6I1AhciZKJCV3myLKAOQKssDQnKCsnV5CxszELViSkgVOLVNOJgPofTk5M0USpK1JCgWonCmVASfGNPprV9DdtJpmblA34g0cvXJOme3SuQbP1WmhgmvpU7xT0h1osk2SmWFJUlkMdzmZMLEihoUx5ZdKWqVgvtBuX8YNWPXFGE5BRx7yfKK1+RaTW6HTdsCOMt8AO+Nw4qjiumVvOtKuP96Y63O0lKtElKZa6oYgIXdCheTRQFQwFA8cl0hZVBUwe2VB00BTW9Xyi8fcifJutR5bA8EgfPhEmvS9mUneof1J/eJdTk7Kzy/u+MVNdVvNkJ6/1H3CMJ75P1Noe0DSE7bvvPmIzKrqiSCxNWVh4/Fo0qV947kv6n3Rj0lo9LRkg9aklNmlDNyd+/4w7RNkdRJ/CfWLtom/d7MgAAhJemL3WfzgnoKxJWicvu9mkYVBvXjh/DviWhmbvz5YTxLB8iPX5rHTdVO2NlVMnF3JCKZJAeudS3SM0bCZksBO0bwwf0xHWOkaUsyZMhMtGCZam61J8XjJpLg1i2+TntpSm6b4BS4FeL/CBv1NaCVyFOM0n5r1rxgnbO7/EPRUDFLWFkioxIGIJmXLo8UluMUmDLdh0qlRuqFxYOBwJ3V9D5xcnMWSDtlLXSGcuTsl2VTKh5w3TuiEpUmXNI7QpqU5E4pfP0gY02SLqx2krecgPT05QgNBbj3P0J8qe6L2r83vSz+pPWih6H+KM/ZreFh7xWAGF4upIyB3jiYu2S0XFpXkDXkcfL0iZq4lwlUrCtrShE0TZimlgoDEjZU5qParm248YJTtJy0gFVoSzPstzoHfyjJ6/2YzJTJJYELYZs7Ho8YKTpJUs3ZocDBWY5/GME7VHp0pSvyH9b5yJlo7SSb6CA71qKOKAu93wgOTiRlQ15EZ4V+Wi6q6pIWFEpOQw9P2pFRSdk1o7XqVGOGGfl0iLPNlS1Ohl0OFAhJehqz8Q/y8PkBSVgvUHdXH30MRypaHAwGKUtUmr1BflEqlbZFUg7wfAK98V2M14NDpG0MqUoc/FobLnfeTuIu+QMD7b3ZYLE3XJLgAkmnDBhyhqZgE5Cs9k8Ww/tj1y6mXxLfmL+R5/hLT+6+Zp7sK7El2FdjvHOImitbpRUhQGLHrwI3RbWCIruScDESfYuK7nP5km6XFMi2Rw3we1ZJUFJZrpwONc4DW+zkTVFSbpUXukhhxPCL+gXBSEgkFTKalGODmnkaZRxsL05To5FeMOlBzKgd3yIUezQASCh+o96nhR0Lf3Z5a+9jMI0fMRNTckzpKjLf7FaSFFwytotdxcUq0H9WbbbkWhMiYlCgoXlVCShL943QUhRqwGLdY8kaVQJSrQQSSlEtCd6gAQE73Wo/wAsaHVjRxRLvrUDNmMuaqoJUrupTndSGA6xx29johCfo+Usl0DiRQ+WMDbVq0D3FdFfEfCDCZrlkCg9r2X4b24RZSmkSpNCow8zQUyWq8EGlbya+kS2vQ31sGYm7fbaejKGBBANCB6xtIUuWA5ADnE7+cVrFQL1csZlJUg78twpjzgFrcv70kfhST5D/wAo18sEEj2TV9xzHXHxjC6zzPvUw/hln3D+2CO80PswalYEuYRhd5g088YBTEIJqCk/lqPA/GITP7OWSl6rU4csReo1Wy3b4iTbw+0M/c+IpHp1GVGwny/+GNyR8+UajQtmuWKcSKrI6gUH9RjIrt6CvFiAKKpjUVwPSNjo2desbp/EEVqHvJOGGChAwDmr2j0magtg56ig9YM6zLFw/wDTPofhAzVSeorReQ2NRh8vBPXBIuq/R8YzkaQ4OeW0hk1FVDyBwivotDzyx9sUyP2o6b4mtqAQgEAgqOPT4xHoZKjPCQBWYlq3cFOK4ZVpCT5Kl2Duu0x7STh9k/jegDabyVIKXZSVPnVO8dRBLXGa1rXeySUg5FnblAyVOPay9zjfheBy+aROodDNI6HVLWG+znXQopGT4OMjviKTpMg3JwuK/F7J5/H0jQ64D74twASlJYHByT44PACVZVKMxKgLiXLnBhuzvPRucGqgoIWZQB7JcwG8B2d4g3kkF23tUdIylokSp14SwUrBIuL9oj/TXnyME7LISZ6KAhIJlv8AiIpiMhe6mJNUtCi1TJwvsZV5Z2XBuksMd4z4xlVt0bKVJJmesVlUmWUpUyio0Lht/L9zhEi6AJSCXd9lgSaua0FS/ExYsdpK5Cb5dV4pvFrxAwBObOz4xVVs3gCHo7lnfvYVw9IyldtGUqY5Kr6TUpZqgChJqOYx3QlAVck4Bgd2DeXOPGDPeKGLrS4Yg4hRzNfOEqYlTLTRLM5DMzkEb6N+0CJ7lmeoESwSWCWyqxJbc9YcpJvIUGDFj0qKDm/SK8xRutS8Npt6c9/yIfeF0F6AjmN/9vjBbuyWjcNCaGWFV6WknFvSJlJj6mEtUVLychqnRAtbQxSHqMYepBG5uOcVV3gWGe4vTfyw8YiUq5LS8GU1tlETQpRBcAB3o2PugPo+2gTE1UK1UGA/hDeu/CL+t7Ga6VFVA77xT3esZztS7Nwjj5v9jaOhj3gkdHl2cEA319L3uMKItD6dk9igKUAQGNN1IUe+MsTSbaPI9adUypqzoAyvtH7aYO7LSCUylMbxUokJEyrMWauMbHRdkmFAE0BIYApCrxUwYhZ3O5ugnHFqQ+bMRLulKkJKvYdKQsJps5XhT0OTW5E8KDpLg+oxHOOQ3e50bLCYfEQh5hCE+cPBhsepwgAcI5rp+Y8+0HcB/UqOlITHJdLWtBnTUKLXmqWu4Ox84vH7gftM1NWBLlkOM9ktiVPTPCK0pW0AQDtBss94gzP0WooFwJUz90gjgw6wKlWZSZiApKk7QxDZ8Y2YkHgpPtUwqQSKSycucF5E6ZLktJUCkgHZI2ZjEoJAAO1dwU4oMHqCWtTnZ8K4JaHqN4AqS6ClnSNqhdnFcTnuEMk6bqxrKsKUOyvhCkoO0AdpYTeCmAKReBwGeLRstayTKUTjcS/Mk/GOV6v2tRUlKZii8xKVJUHSAgoUbrMWISGBdo6hrlMZEwcvUfGIZcUYK0exwJfgNnHhHmqSPvaGJrMAatXveURWyyCZwIz4O7FsqQ7R+ljZ5naLswJCneWTdLYOhRLCpzgGy7rQlRnqvd4ywSN1XOXFUUbPJJmy0ISl1EUNPafLAOkVhmn9NS51oK0OElLkkNipylsSXOQrjvixo9QNoksxZbFi7FLgjz8ozKCGukz72vFrqang+MUtGMUTnJq/Jqn1bHjE2scwqtCyrNAPJ3bwiTQdmdFpViyVcq1wGLP58BA9xg1VlM0SyFXLoUQQH9rOu8eUTfRhLWJ9rDd6WvwCi5Hz6RLYEqIl/pLkZ7R4RX+j6fK7a1dutQvKVKQApQcqvAA3ThQ1oxaFG7aKlwjH2Q7AckMpTMAzOfN38c4U2zg7b4VZqtwOLerQrFKa81F3lNj3LwcAdDhvjy0PjWlBk74hh8M4wl7mZsgmoVeAqy0mjAirgvvYqGcTiz9kyU91urh8uMPRbgdguFGoowpgS+AO/hESZwU7igUWzY4Go5mHuLuWpAIwZ2d8M6jlh4wlJIBZIIo3AHI57o9QtQSakFyKsW48naHncqjhwMqHjx3cIixtB6x21cqzy19nelXilSgp1BmJZLezeBxLh23QXs1qlzH7OYld1nukFnDjDeICaFKlhMhLG9MTl+Nk/wDj4QLtllVYZ6Zkt1AJAmJ/GnBX8Tgkf5jqdL1bUVF8HkydMpW1ybGYng43c98QqsicAKk1Iz+Pui9Y1S5qEzEG8lQcHh8YlMoR07TPHujnGu6UiaEJYEJBoN5NeP8AmMqgAKrj1x3UjX6/rAnpoXSih35luFYyUycFHIfDKOR1DvI6Ohh9iLBtaBRj0jyK8tAIe56wowpG1msmTVi6SStCAXTMJUAG9nPG7nEVm01KcXAuWWJPZrUCwDksRkBvwh2lluhVWJSfOAejHT21HKpC0JYgm8spTkfwlUenJs6Rjj3jbNrY9Yie5aieExAX5pcwXsmm5qiBclTDuQspPgp45rJ0fMRItClylJ2UIBWlSWKpiVG64rSWRyMbn6J7EFSbRMNSFJQkudkUdtxN4RnS8Ghqk21CTdWpCVn2StO4OAc2di0WXjmuvtnRLnqlpACQpRFAPaIqczs4msLUq1rRNSAXSqhGVVCrb4bwenUmZrJbo6WtTJJ3AnwEclLKnLTdSXW1eQGO6OqW1bSph/Ir0jlVjU8//u+9vdGWPk2fBJP0QAX7NQO9DH0YwrKqZLLpnKHBYBpyWMI1CIq2zSUoODKWtnHdSxbFnOEa2TpA69IzWIVIkqCjtGWOzUoMQxKSd/CPRb7KoBKkTZTbwmanBhgQqmLtEptllVihSDwBp/LSGGTJXRFoT+lbH1hiC+ihIVMlKRaEOkg1JQXyvBQqKnxwzjd606RklKkJnS1KBSLoWm9gnJ3jlczQiyKJQv8AQqKk7RygzomJaod2DV/eE0NOjaGPFRFZZwWgKGY8Dn5w9NcYksrrkJzSPAYu9IeVKlkKlrZRIUxqKY09kvWmZMPmgw6WBdL8XPp4RErGgfaLVOmTL6pblgnZLOzua5mnnGg0HpBAs9pF9LrwAxDHafy8eEBZYpg1D88Y9lygpiQMDXDrSmZgAJ2BWynFrp/qMC7FYbAmTNXOWpU4rVMSBKWUp2iUprLLnAl6bXCL8lIAQkKpcJDFz3lY04wN0taOyJTcUq/gwfmG3/GFjaUmXNNwVAKanaICklKVEJWMDhdcPs95IbHGGrQwIxJqDjUbqVLw6bbAm6VJUkzHYEFxVmI3ksOg3xAJIvElBST7Tln4C9Qvkwjzyq2RVcnomOm8MM3DE8A5xYiIjNC2LYYbwCcDnQN4xdQEhQDZuWOBG6u8v4xVtaw5T7Q3Av0ph5QkxMmReFFF3DOGGRwG/E9IehSVMAxAJdy7ON5wq7cogsk9gydohiRmN1RxETSFXbwN0A1oBWuY3jzPhAx9jQ6jzmtCXqGJFQKioqzPR+kEtNhK1LSRQL/+w48wIy1htBRNF03SFM4oRyIg6uWVEk95zVszjSNsTpEpWV9VZcyTOVKFZSkmY1dhTgG7RmL4cOcaomBOh/8AiN/y6cQ4YxemW5AVdJIO5j8tHX6bJHRuzw58b17I5zr9aL1oIBOywGNCwcRnEooC464xq9e1J7YlIAICSad7jzwEZAzAN+L8OkeHM7m68npxqooe24qHI0hRAZb+15wozo0DdsnKXIWzk0FK5h4CBKgmZeBFAKgj2hv5QQthazc1/H4RQs85QQWUobSRQncon0EbTfqIgqQbsalIs0xSFFP2ktLpJCgyJpLN0fkI3n0f29SLKpS13kmcEkEkqSkBJcDc77sM4xyrdMTZQb5LzlJ2toMhCaMpxiuOlfR4h7HKJbbnXqJSkUUpOCQB7ESMwWvNoEy0qUkgiteBUpQ/qES6pp+3RzHxECdaVn6zM6M24gH3wU1DW88PkQPItG83WP8AQwgvUdC0stpEz9LeMclsNvlJnC8sBll3pmY6trAprOvp/UI4DaC61H8x9Y8ePuersdSlaUkK7s2Wf4h8Yj0pbLVdSLPON3BUtISXBxL3X3vWOXBMdb1A0X2MiStmVNMyZ/ChLJ/pUf4otoaZlry80iI5k4DGXF1alKmTSCyRMmABh7KiBlhSKarQFBiqWQRvajt60gomxlmnSld3ZY+yW9Gi9Ltak92esDiX9Xipo6zBFEpBDs7gt5RLsrSrYYMa74KY9ghYNMrJupXKXwIY/wC0j0g5KtSSMQ7V3dI59IRdJIxCnHlGm1N0Z28+WntCUFclChfGBlEzCxrVQccKwNBYeUc34j5MMVOoRnnvbp1i7rYhrWoJLJSlLJAZLYAN+lh0gIDMEyUQkKCsciWUkeih5xLWxSZekjZrizH39ISJj067vH5yh1pWlKmbFJJem0agV+aRFY5aphXkEpKlvQMPeaBuMShhGSjukGl3Ch9o7sP3iCdMSqZLqCRewPBq8cfCLFmum6WNU+O0cnyjFaF0d9YnzkFV0GdddiSAVKw4xChqbNHPTFBfWKxlUxCndLVTxS90tnVvCBABBN9QUSRQBhxark4eMRW62qlWi0S1qKgiZcSGYMl6JrQnKu7GFbezUkKdYBIIuO5c7sOh4mMmnwTN3JnqkBJISQ6i5Cg5cijtiMs8o80iyQg5gM+JYNTjn5w2zgJwoAd+IO81w98SaQtCRdJZkuXoWfc0LuZrcfJlAAqDEtU+1Vq+QNTvhWaZUh6uxCmd3GDZMQeohsicAnYDlRqH+SP/ANRAHFAklt9QWxrvrCqxloApmO71Y8R8+kazSMpctS6ilWGdQzU/MIxhmG+oF2YV3Fo1ukwZaE3gxMtAzNbqCceRMbY+CY8sfoucxlipKiEAHeaAeLQdv7akXQFIZ8xtBwxEZPQ6gpclt6iDuKReHnGtui8VNtKZzvbCNcb2Jnyc9+kOVgohjeKc2ILqS3merRhGfGOta8ISqyrvUKJgUCz+yadW9N0cttMx2b5eK4Hd0QhPAQoa8KGBpJKHlpBIZnYgEOTxEQiUcAmWQ79wDDOnMxYTKVdSwB2RnXwh8lCg7pahxeNHyZoll2gqSEKkyFJBKgLq01LAnZWK7I8I6NqfaVIs8oKQmWgKJQBewu33dRJYqUpo5oiaQ2yD1/aNVZdNEoAZrqCABlsU8KQqHZkNNTQuYs5hh4AD3Rc1bNFHiPSAtrXeWo5EmDWraAEKajq9wjaftMooPawawqTZik1U6QDvD1fi2ccuJx5xu9ZLhs4eigrxoYwYMeZJI9HYlkIdSQMSQPEx3+ZZRKXJlJwlyFJHRJHujhOiEvPkjfNQPFQjveklfeDwkHzUR74bGuDKaGQPqduVi6XDjMqmn1Ec7l2RV0BvYSMR+NzgY6FosNom1EbRUlAo9XC8KP7UZXRer8yZKBEuZeezoTskJN5S75JbBLJc5PWGSybQskhKnDPMUej0iay2RRkqKQ4SipGTmNBqJoFZlrXNlqSEdqshSSHa9doeLHpBex6PEvRqljGZNR/KnDzUrxh2CRzyVomYoXgzFzUtQON35TB36J50v60lF096UoEqzuECgSKMrxaLtsG0KtsePeitq7omZPnS0JoFFipk0AYmrZCvSJTsbVBzW0/fJn6U+sA7Cv73KF+7sChdj9qluHD+LnBPWNH3uYl9lKAK1JYUcxW0LZSu1yRs3iwCiO7tXgehSD0hFPgv6xI+3mtg7D+ZR8iB4xNq5tyraCBspughno5ct5c4g1yJ+vG6101V4ueuMWtV5DWe2KYVLHFyWLdKHxESkNlbR6thHBJH+4/GAWoCXtUwAOTaNwIYFRL1yD14QZsIZCDmUknd3sujQO+jBQ+tzFUbtJhJO4D94Ie5jy+xAbTKim2W1SQCrt2DuybwWXO7u+cUZq2ILKB/CwID9D5bou6Zn/eLctBvDt04VBTdmOzY4RTs5vd8McSKpwrg/oYwl/H0CfP7/UaE3VpXUpVRvzCmGW/iYkWCSQbj43TUNkQd7g+EemWTTPImlDwauRhrJXvCkFt44P49HiGRHknlzrpF8hlUADB8N2dYhSquOGdA+9xlDQlCmQ225FX6u/AjxEMSHJDGtW40wBwDh+phJDZMpO1tAs++mTHe8aqdbFTZaSogslKf5U3R1aMglRJJOLYe48jGu0/ZxJkhKX7iCd94gv5xrBckxe4LSoI7M4ELLM4/D8IOI0gkT1KFEFIFMKE084yEtXcJfF/FvnrF6xlRZkhyoUrhg9fmsLHNvgbpl7XielVnXcPeuDMYqIr0LRzFSD1jp2slkH1abtAESwWLOrE0Y0q0c2mho9CEQhfCPI9KDHkMDTzTwNABRvjEshbA0Vhw+MN7Mq2gzGoLisPTZlcMN8a0ZWRlY3Kw3DdzgkKIUeB9Gir9VPDxiS32kIlmhN5wGD9TuEAGeNSecaHV+kvmT7ozgU3jGl0Gn7LxPnF5HsTHkpa0zNhI4+6MzPtClkFZcgACgFBgKc40GtRojr7ozIEYmyCmrSXtlmH/AD5f9YjtumJl2bOO6QPNY+McM0PMUmfLUnvJUFJ4EVHmI69Z9KmebQpSQlQlhOyXFCMCRwhDK2j5Rl6KmJNDflp5EBPxh9g+sXEXZ4Sk5XJZbxDn94ktIfR6642gf7RLMWtEyU/VZOyNqYt6CrMz74fYO4Z0TLmiRaFLn30iSoMEpSKjEsMoqWhSf/5UpiCCsVGB2sjB2QkCyzmAA7LLipUBNYA2jJP/AFB/XElGXtXe/wC2f7oMfRrKT9aQauEralKhL1eMladJMsC6S4YkZCvxMarVnTsiykLRJnTFszsUirOBeLdYa4E9yrrCfvc/kR5GHasoe22fHEe+B1utS5loXM7NSUKqKgkPQ3q7r2/KJNX9JzZShN7FKlhiCSwHKpMJDe5f1rUO2mKGFWff3a+J8Itaun7ramFL4r0XADTWkFTlXiAlTusAOkEvTi/uhlht89KDLTMASaKAGNOOcTHgb5CdnpLlH8pfxECtGFVhmXpaVzFKUpQCQ7XutRTzgtYkfZoD3mSXP8X+YqWVZM8gByJWeDulvSM7ps3STirB1qsRUmdaFJKDMWlfZnFJTeSem04EAlIL1Z8OPT5zg+nTRmpmy1oA+zUWrin4Y9IzSJwUTg/HP5pGdMyzLe0WJUxheUKgMSHYjJ+MeZ903iKY1Z/iI8lpKmvJTexBxrlQYwpE0gl2cqqAcCABly9ITM4rckRLNKMCHOIN4EVxND7oahg4DuDjiSPn1MNtc8gOHIBoQQWd8a0w9YissozCAl1rIN0DFRDvQHCkCi3uORZ0ZWckfjWA2JJKhhxrhG6+kLvF2wSC2FFKEZzU/RMxM0KnoXJUhlJKhRShmHpxpGr0xKTOftFqW+6mBJFQ2ZPjG0VSaJSp2YJCaJP5q+UEZ2hhMQFpX9pVyxupCQVAf7U1pU45QZl6OkDZuDF6qJV4gj0iyuxoV7CR0HuicOJxe420ZPSWip0pRAWqejsnViKKcAMSrIXmxpGPttmVKmFChh50cO2bR1dVglJ9gHnHP9dZYTaAybuyHAbjWhjeibsBOeMKIyeUKADZIWwYIPlDxNV+Hz/aCE6ytUYRBdik2+5NIgExe4eMeus43W6mJ7segQb+RFFVhS6SEihcvui+gNCaPWgoAfraEdigjvMr1TGKBjQa1TC6RwPn/iM8ISVGnYu6IU05J3fCNpoS1qBUHopn+esYnRn/ABByMavRqqqPKKRLNha5o+opGZnKPgEj3QQ0aprPZx+ZZ8RGRXaSUBL0BJbnGjs9uHZywANgUzxFXgrYae5swv7pO/QkeJgRrD/7dIG9Y/riunSw+qTgSME8GZQ90V9OaUQuy2dCFJO0DQg+08QX2MhpCUUKvCLmjbYFMDjF6fo9a00STygKqxqQquyRvpByLgOIEeth8vEGjrfJNFzGI4e+KekdPS0koSlC9kOolTBTbQQGp5xEnRVjrPLeZPG4pPiP2j2yWUlRYE4/POhgHo+3LF66dvZJOLhlZviCQccjxgrIUqfOT2Su6NtbNeLbTcHUpno44QahB6zrKQBnUEYUehBwOdMaQF0hZp8xX2KzLUBtmgN0AZq8ekGFWWcl7oxxqHPMs5gZN0fNCrxUohRcggAcj+IUG/CBJW2ynN0kijZtBzFTbwUyWqalSypLLOLVc1fOA1ssapA2gEkO5UcqZh86NzjeWaetON1QLUYOKVY+0Hc9YtzZ7hkywCRirAeNfKJq1QnJvk5cFJCQq6kA1cEfF+HWDlg1bSuWla1qQogm6wo5cFqHD1jTTLGFAiYxfEBLDyh6JaBgB8+cCi6J2TBGidFdioKQSWoxCQCDiCCDBUyklQUZctKhgUISkh/zAP8A5iUrhMM1Dxi6FaEqcPmvrEXa8D0EQWtm/wCJ4Eg+UZ632ufKqVFSN5J9xi1ETYX0hPSXEySVI/EBeI5hwR0gXKWn/wCG0lA/CqvkoxWl6XSoVUQeJiNchC6quknix9YrgkIpt1qSapRNG9ND89IymsFpM2epSgQQwKTkAMPnfBWdJnSxsLU24+4/4jOT5hWpRzUXPHnEyGivMlh8W4QolTZ+XnCibQ7OifWAaRBNERmPQqKok8j2EYZ2g3iKEPjwxGJwyCj0+MNVMVkkdT7gDABntZgSsfpgGEGNVpGxmYzkU3Bj4x5JsKAIVFJgjQFlKp6UlwCDVsKPXwjQXFIEy6HNGG9ofKsrd2keTJZG73xSE2VUWi0KDCWhJfFSvcHMNmzLWPaAH5a+GBiyArcYkdsSBCasaZSsyVKJClzVE44pHIk5dYM2TRihV5Q/7iyphg7lXrEMljioNFk3ANkk8wBC0j1F1M+YihtCm3JJMNnWuU1SpR3qA9YoJnh616xfUqWUYsdxx6DGJaoaZQVLQXImBJ419IBW+wrKncK/Sw+EEpsyYkm7LJG8gJ9XisvtCXUw4Y+Rp5Q9NisFIlTBg7jIV9Iv2GdNAo7Y038bucGJVlKk4L6s3hFK1SyktXl/iGoist2PWKeihLj8x+fWLqtZy2Cj1b0rGevcAPni8eXDkIelBqZof/VKgNiSBxr8IhOsc5X+mOh9YBgqNCpuZiR1p9rwgpCs0dl1kBopLfmBpFiZpWTms9Kxn5dtDMUB97tFFZDw6CzYItsn2ZwfcrGJE2rfcI33h7ox00y2oS/KK5XwgoLNhabWgYKQOF79ooWi0BYuslQOQUD6s3SBtiTIUNtVeNPOPZ0mWmsqZXcQD4QhlK2aLUAVJB5UJHIg1ilJtqkYFxuNRB2XapyRW6RxYGKFolImuTsq3gHHi1D4QARm3pUCC4fHL/MB5iGLf5h9pkqSWNDHiJlGPThviWhkiZamyhR6A9WHnCiKA2YL5geEMKRmo9MIUKN6IEFJG7rWPV2hLNjwAjyFABBc3bPM18BCJ4mFChAxySNw61iUWgMwQPnlChQwojYnIwmhQoVgSoQkB1UERWgIPsdSK+NIUKAdAyZMS5YhPI1PNi/SG/WzgAotmS3pWFCgAUkH2lADckMPHGLkucpIaXTlT1rChQAViVqVeLqbmfBouJ0ldFJbHlChQAOl6amDEE86Q20aUXMDXQBChQAUFoPCHWdKx3fSFCgAS5SiatDk2UPi3OFChgR2hDZgxXKoUKARGVQlIIhQoBkalGGiPYUIB4nFmJLc4fLtykd003EPChQDLkjTKSGmoBHKnhEs36oUumhI3QoUQ4pjBX1WUMweJJ+EKFChaAP/2Q==',
      linkToBookOnline:
        'https://freetoursbyfoot.com/charleston-sc-tours/walking-tours/historic-district/',
      schedule: [
        {
          day: 'Monday',
          open: true,
          time: '9:30am, 1:00pm'
        },
        {
          day: 'Tuesday',
          open: true,
          time: '9:30am, 1:00pm'
        },
        {
          day: 'Wednesday',
          open: true,
          time: '9:30am, 1:00pm'
        },
        {
          day: 'Thursday',
          open: true,
          time: '9:30am, 1:00pm'
        },
        {
          day: 'Friday',
          open: true,
          time: '9:30am, 1:00pm'
        },
        {
          day: 'Saturday',
          open: true,
          time: '9:30am, 1:00pm'
        },
        {
          day: 'Sunday',
          open: true,
          time: '9:30am, 1:00pm'
        }
      ],
      options: [
        'history',
        'walking',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ]
    },
    {
      _id: 'history_civil-war-tour-of-charleston',
      tourName: 'Civil War Tour of Charleston',
      companyName: 'Free Tours by Foot',
      address: '107 Ashley Ave., Charleston, SC 29401',
      phone: '843-580-4019',
      price: 3,
      duration: '2 hours',
      type: 'walking',
      desc:
        'We will bring you far back into the history of this great city and bring to life the stories of Charlestonians who lived through four years of hellish conflict, from secession and the first shots fired until surrender, and examine the causes and consequences of this great national tragedy.  It is a name-your-price tour, with a minimum $3 charge',
      img:
        'data:image/jpeg;base64,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',
      linkToBookOnline:
        'https://freetoursbyfoot.com/charleston-sc-tours/walking-tours/historic-district/',
      schedule: [
        {
          day: 'Monday',
          open: false,
          time: null
        },
        {
          day: 'Tuesday',
          open: false,
          time: null
        },
        {
          day: 'Wednesday',
          open: false,
          time: null
        },
        {
          day: 'Thursday',
          open: false,
          time: null
        },
        {
          day: 'Friday',
          open: false,
          time: null
        },
        {
          day: 'Saturday',
          open: true,
          time: '1:00pm'
        },
        {
          day: 'Sunday',
          open: false,
          time: null
        }
      ],
      options: ['history', 'walking', 'saturday']
    },
    {
      _id: 'water_harbour-sailing-tour',
      tourName: 'Harbour Sailing Tour',
      companyName: 'Charleston Sailing Charters',
      address: '',
      price: 3,
      duration: '2 hours',
      type: 'boat',
      desc:
        'Start with our basic 2 hour day sail or splurge and spend a full day lounging on your private crewed yacht on the Charleston Harbor. We can show you the sights from Ft Sumter to the Ravenel Bridge or anchor in a cove and swim, its all up to you! Most charters are 3 hours or longer in length. We sail year round in South Carolina and we are always ready to get out on the water!',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKtCdd4f_pu2dPf36s0VV2n4qbaaWK1GThhAIGqS8kzBD7LnZi',
      linkToBookOnline:
        'https://freetoursbyfoot.com/charleston-sc-tours/walking-tours/historic-district/',
      schedule: [
        {
          day: 'Monday',
          open: true,
          time: '8:30AM, 10:00AM, 2:30PM, 5:30PM'
        },
        {
          day: 'Tuesday',
          open: true,
          time: '8:30AM, 11:30AM, 2:30PM, 5:30PM'
        },
        {
          day: 'Wednesday',
          open: true,
          time: '8:30AM, 11:30AM, 2:30PM, 5:30PM'
        },
        {
          day: 'Thursday',
          open: true,
          time: '8:30AM, 11:30AM, 2:30PM, 5:30PM'
        },
        {
          day: 'Friday',
          open: true,
          time: '8:30AM, 11:30AM, 2:30PM, 5:30PM'
        },
        {
          day: 'Saturday',
          open: true,
          time: '8:30AM, 10:00AM, 2:30PM, 5:30PM'
        },
        {
          day: 'Sunday',
          open: true,
          time: '8:30AM, 11:30AM, 2:30PM, 5:30PM'
        }
      ],
      options: [
        'adventure',
        'boat',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ]
    },
    {
      _id: 'culinary_savor-the-flavors-of-charleston-tour',
      tourName: 'Savor the Flavors of Charleston Tour',
      companyName: 'Charleston Food Tours',
      address: '18 Anson Street, Charleston, SC 29401',
      phone: 8437271100,
      price: 60,
      duration: '2.5 hours ',
      type: 'walking',
      desc:
        'Come join us as we walk, talk and taste our way through Charleston. This 2½ hour Charleston Food Tour will immerse you in the history and culture of the Lowcountry. You will discover how our unique cuisine has evolved over the past 300+ years while sampling delicious specialties from local eateries, markets, bakeries, restaurants, and culinary landmarks.',
      img: 'https://c1.staticflickr.com/9/8202/8211345552_fe75149247_b.jpg',
      linkToBookOnline:
        'https://charlestonfoodtours.com/food-tours/savor-the-flavors-of-charleston-tour/',
      schedule: [
        {
          day: 'Monday',
          open: true,
          time: '10:00am, 2:00pm'
        },
        {
          day: 'Tuesday',
          open: true,
          time: '10:00am, 2:00pm'
        },
        {
          day: 'Wednesday',
          open: true,
          time: '10:00am, 2:00pm'
        },
        {
          day: 'Thursday',
          open: true,
          time: '10:00am, 2:00pm'
        },
        {
          day: 'Friday',
          open: true,
          time: '10:00am, 2:00pm'
        },
        {
          day: 'Saturday',
          open: true,
          time: '10:00am, 2:00pm'
        },
        {
          day: 'Sunday',
          open: true,
          time: '10:00am, 2:00pm'
        }
      ],
      options: [
        'culinary',
        'food',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ]
    },
    {
      _id: 'culinary_upper-king-street-culinary-tour',
      tourName: 'Upper King Street Culinary Tour',
      companyName: 'Charleston Culinary Tours',
      address: '563 King St, Charleston, SC 29403',
      phone: '843-259-2966',
      price: 60,
      duration: '2.5 hours',
      type: 'walking',
      desc:
        "This 2.5 hour tour offers insight into Charleston's historic Upper King Street neighborhood (recently named one of the top 10 food neighborhoods in America!), showcasing four of Charleston's culinary innovators who exemplify cooking in the New South!",
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2SxoMrrv9bfKvd1zabEdzmlrrpTPsjrd4nxj5pLYLb2vsg679',
      linkToBookOnline:
        'https://charlestonculinarytours.com/activities/charleston-upper-king-street-culinary-tour/',
      schedule: [
        {
          day: 'Monday',
          open: true,
          time: '3:00pm'
        },
        {
          day: 'Tuesday',
          open: true,
          time: '3:00pm'
        },
        {
          day: 'Wednesday',
          open: true,
          time: '3:00pm'
        },
        {
          day: 'Thursday',
          open: true,
          time: '3:00pm'
        },
        {
          day: 'Friday',
          open: true,
          time: '3:00pm'
        },
        {
          day: 'Saturday',
          open: true,
          time: '3:00pm'
        },
        {
          day: 'Sunday',
          open: true,
          time: '3:00pm'
        }
      ],
      options: [
        'culinary',
        'drinks',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ]
    },
    {
      _id: 'culinary_downtown-charleston-culinary-tour',
      tourName: 'Downtown Charleston Culinary Tour',
      companyName: 'Charleston Culinary Tours',
      address: '563 King St, Charleston, SC 29403',
      price: 60,
      duration: '2.5 hours',
      type: 'walking',
      desc:
        "This 2 1/2 hour tour explores Charleston's Historic French Quarter, offering the best of Charleston's history and food while walking some of the oldest & most historic streets in the city! Showcasing some of Charleston's traditional favorites, as well as recent innovations, this tour highlights the cuisine of our favorite locally-owned and operated restaurants in the Holy City. It is a journey that is informative, delicious and fun!",
      img: '/food2.jpeg',
      linkToBookOnline:
        'https://charlestonculinarytours.com/activities/charleston-downtown-culinary-tour/',
      schedule: [
        {
          day: 'Monday',
          open: true,
          time: '2:00pm, 3:00pm'
        },
        {
          day: 'Tuesday',
          open: true,
          time: '2:00pm, 3:00pm'
        },
        {
          day: 'Wednesday',
          open: true,
          time: '2:00pm, 3:00pm'
        },
        {
          day: 'Thursday',
          open: true,
          time: '2:00pm, 3:00pm'
        },
        {
          day: 'Friday',
          open: true,
          time: '2:00pm, 3:00pm'
        },
        {
          day: 'Saturday',
          open: true,
          time: '2:00pm, 3:00pm'
        },
        {
          day: 'Sunday',
          open: true,
          time: '2:00pm, 3:00pm'
        }
      ],
      options: [
        'culinary',
        'food',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ]
    },
    {
      _id: 'culinary_sippin-wadamalaw-island-tour',
      tourName: "Sippin' Wadamalaw Island Tour",
      companyName: 'Crafted Travel',
      address: '1529 Sam Rittenberg Blvd #2A Charleston, SC 29407',
      phone: '843-804-9933',
      price: 95,
      duration: '4.5 hours',
      type: 'culinary',
      desc:
        'This scenic Lowcountry drinking tour is NOT for lightweights.  First you will stop at the Angel Oak Tree for pictures then onward to your Wine Tour at Deep Water Vineyards followed by a Distillery Tour at the world famous Firefly Distillery.  Then you will finish with craft beer and food truck. Take the stress out of drinking and driving so your group can enjoy the ride with your Personal Guide as you sip your way through Wadmalaw Island in our climate controlled luxury limo fleet.',
      img:
        'data:image/jpeg;base64,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',
      linkToBookOnline:
        'https://www.craftedcharlestontours.com/charleston-wine-tasting-tours',
      schedule: [
        {
          day: 'Monday',
          open: false,
          time: null
        },
        {
          day: 'Tuesday',
          open: true,
          time: '10:00am, 11:00am, 12:00pm, 1:00pm'
        },
        {
          day: 'Wednesday',
          open: true,
          time: '10:00am, 11:00am, 12:00pm, 1:00pm'
        },
        {
          day: 'Thursday',
          open: true,
          time: '10:00am, 11:00am, 12:00pm, 1:00pm'
        },
        {
          day: 'Friday',
          open: true,
          time: '10:00am, 11:00am, 12:00pm, 1:00pm'
        },
        {
          day: 'Saturday',
          open: true,
          time: '10:00am, 11:00am, 12:00pm, 1:00pm'
        },
        {
          day: 'Sunday',
          open: false,
          time: null
        }
      ],
      options: [
        'culinary',
        'drinks',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ]
    },
    {
      _id: 'culinary_charleston-distillery-tour',
      tourName: 'Charleston Distillery Tour',
      companyName: 'Crafted Travel',
      address: '1529 Sam Rittenberg Blvd #2A Charleston, SC 29407',
      phone: '843-804-9933',
      price: 85,
      duration: '4 hours',
      type: 'culinary',
      desc:
        'Join our Charleston Distillery Tour and let us be your designated driver while you keep sipping. This All-Inclusive Private Distillery Tour takes you behind the scene of 3 different distilleries to learn about the unique process involved in producing Small Batch Craft Spirits. Be sure to try the Carolina Reaper Peppered Vodka. It will sure to light a fire in you! Free Party Bus upgrade for groups 8 or more. ($700 value for FREE)',
      img:
        'data:image/jpeg;base64,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',
      linkToBookOnline:
        'https://www.craftedcharlestontours.com/charleston-tours/charleston-distillery-tours',
      schedule: [
        {
          day: 'Monday',
          open: false,
          time: null
        },
        {
          day: 'Tuesday',
          open: false,
          time: null
        },
        {
          day: 'Wednesday',
          open: false,
          time: null
        },
        {
          day: 'Thursday',
          open: true,
          time: '11:00am'
        },
        {
          day: 'Friday',
          open: true,
          time: '11:00am'
        },
        {
          day: 'Saturday',
          open: true,
          time: '11:00am'
        },
        {
          day: 'Sunday',
          open: false,
          time: null
        }
      ],

      options: ['culinary', 'drinks', 'thursday', 'friday', 'saturday']
    },
    {
      tourName: 'Aircraft Inside and Out',
      _id: 'history_aircraft-inside-and-out',
      companyName: "Patriot's Point",
      address: '40 Patriots Point Road, Mount Pleasant, SC 29464',
      phone: '843-884-2727',
      price: 34,
      duration: '2 hours',
      type: 'museum',
      desc:
        'This 120 minute guided tour centers on the history of aviation and the many pilots behind the flying machines. This peek inside some of our favorite aircraft offers a view not available to the general public. This special tour is limited to 20 max guests due to space and time.',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdgnMEv4A3tXwzQB-JrFNcfcbMEv85MyQx3krhRF5_s7zqtoWI',
      linkToBookOnline: 'http://www.patriotspoint.org/tours/group-tours/',
      schedule: [
        {
          day: 'Monday',
          open: true,
          time: '9:00am - 6:30pm'
        },
        {
          day: 'Tuesday',
          open: true,
          time: '9:00am - 6:30pm'
        },
        {
          day: 'Wednesday',
          open: true,
          time: '9:00am - 6:30pm'
        },
        {
          day: 'Thursday',
          open: true,
          time: '9:00am - 6:30pm'
        },
        {
          day: 'Friday',
          open: true,
          time: '9:00am - 6:30pm'
        },
        {
          day: 'Saturday',
          open: true,
          time: '9:00am - 6:30pm'
        },
        {
          day: 'Sunday',
          open: true,
          time: '9:00am - 6:30pm'
        }
      ],

      options: [
        'history',
        'museum',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ]
    },
    {
      tourName: 'Flight Deck and Hangar Deck',
      _id: 'history_flight-deck-and-hangar-deck',
      companyName: "Patriot's Point",
      address: '40 Patriots Point Road, Mount Pleasant, SC 29464',
      phone: '843-884-2727',
      price: '27',
      duration: '60 minutes',
      type: 'museum',
      desc:
        'This 60 minute guided tour covers areas of the Flight Deck and Hangar Bay accenting the history of each area and the "Fighting Lady." If not able to go to the Flight Deck due to weather or other considerations, the Medal of Honor may be added to this program as time permits. To schedule your tour, please contact Shirl Knight. This tour is also handicap accessible',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK0MLTLgJwHTZNkyr88Qvp5aG_N-hqSsTlAPFLQAOBBkIaXQw2qg',
      linkToBookOnline: 'http://www.patriotspoint.org/tours/group-tours/',
      schedule: [
        {
          day: 'Monday',
          open: true,
          time: '9:00am - 6:30pm'
        },
        {
          day: 'Tuesday',
          open: true,
          time: '9:00am - 6:30pm'
        },
        {
          day: 'Wednesday',
          open: true,
          time: '9:00am - 6:30pm'
        },
        {
          day: 'Thursday',
          open: true,
          time: '9:00am - 6:30pm'
        },
        {
          day: 'Friday',
          open: true,
          time: '9:00am - 6:30pm'
        },
        {
          day: 'Saturday',
          open: true,
          time: '9:00am - 6:30pm'
        },
        {
          day: 'Sunday',
          open: true,
          time: '9:00am - 6:30pm'
        }
      ],

      options: [
        'history',
        'museum',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ]
    },
    {
      tourName: 'Fort Sumter Tour',
      _id: 'history_fort-sumter-tour',
      companyName: 'Spirit Line Cruises',
      address: '340 Concord St., Charleston, SC 29401',
      phone: '1-800-789-3678',
      price: '22',
      duration: '2 hours',
      type: 'boat',
      desc:
        'Once aboard, you will experience a relaxing 30 minute narrated cruise to historic Fort Sumter. You will learn about the events which led to the outbreak of America’s most bloody war. When you arrive you will be greeted by National Park Service Rangers, who will provide further details about Fort Sumter and its pivotal role in the American Civil War. On the fort you will find a very informative museum (360 Video of Museum) with many historic artifacts and a souvenir shop. After your roughly one hour visit, you will enjoy a scenic cruise back to your departure point.',
      img:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ExhPYqB-7QFOBJhXy_TlksuOHzUD9JWG-XEpDx23rMSstCdAKA',
      linkToBookOnline: 'https://fortsumtertours.com/tours/fort-sumter-tour/',
      schedule: [
        {
          day: 'Monday',
          open: true,
          time: '9:30am, 10:30am, 12:00pm, 1:00pm, 2:30pm, 3:30pm, 4:00pm'
        },
        {
          day: 'Tuesday',
          open: true,
          time: '9:30am, 10:30am, 12:00pm, 1:00pm, 2:30pm, 3:30pm, 4:00pm'
        },
        {
          day: 'Wednesday',
          open: true,
          time: '9:30am, 10:30am, 12:00pm, 1:00pm, 2:30pm, 3:30pm, 4:00pm'
        },
        {
          day: 'Thursday',
          open: true,
          time: '9:30am, 10:30am, 12:00pm, 1:00pm, 2:30pm, 3:30pm, 4:00pm'
        },
        {
          day: 'Friday',
          open: true,
          time: '9:30am, 10:30am, 12:00pm, 1:00pm, 2:30pm, 3:30pm, 4:00pm'
        },
        {
          day: 'Saturday',
          open: true,
          time: '9:30am, 10:30am, 12:00pm, 1:00pm, 2:30pm, 3:30pm, 4:00pm'
        },
        {
          day: 'Sunday',
          open: true,
          time: '9:30am, 10:30am, 12:00pm, 1:00pm, 2:30pm, 3:30pm, 4:00pm'
        }
      ],

      options: [
        'history',
        'museum',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ]
    },
    {
      tourName: 'Sunset Sail',
      _id: 'adventure_sunset-sail',
      companyName: 'Schooner Pride ',
      address: 'Aquarium Wharf, 360 Concord St. Charleston, SC 29401',
      phone: '843-722-1112',
      price: 54,
      duration: '2 hours',
      type: 'boat',
      desc:
        'People of all walks of life can enjoy two –hour public sails! There are no set courses, she sails with the winds and tides so every cruise is unique. You will always be in the sheltered harbor area and see all the sites just closer to some than others. While this is not a narrated cruise, the crew is happy to answer any questions and point out landmarks and wildlife.',
      img: '/sunset_sail.jpeg',
      linkToBookOnline: 'https://www.schoonerpride.com/main/daily-sails',
      schedule: [
        {
          day: 'Monday',
          open: true,
          time: '6:00pm'
        },
        {
          day: 'Tuesday',
          open: true,
          time: '6:00pm'
        },
        {
          day: 'Wednesday',
          open: true,
          time: '6:00pm'
        },
        {
          day: 'Thursday',
          open: true,
          time: '6:00pm'
        },
        {
          day: 'Friday',
          open: true,
          time: '6:00pm'
        },
        {
          day: 'Saturday',
          open: true,
          time: '6:00pm'
        },
        {
          day: 'Sunday',
          open: true,
          time: '6:00pm'
        }
      ],

      options: [
        'adventure',
        'boat',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ]
    },
    {
      tourName: 'Historic Charleston Harbor Tour',
      _id: 'history_historic-charleston-harbor-tour',
      companyName: 'Charleston Harbor Tours',
      address:
        'Charleston Maritime Center, 10 Wharfside Street, Charleston, SC 29401',
      phone: '',
      price: 26,
      duration: '1.5 hours',
      desc:
        'Climb aboard the Carolina Belle to enjoy the beauty of the Charleston Harbor and learn the rich history of the Holy City. During the scenic and relaxing 90 minute tour, you will see over 75 landmarks and points of interest!  Your professional USCG licensed captain will narrate history, sights, and facts about the Charleston Harbor as you pass locations critical to United States history.',
      img:
        'data:image/jpeg;base64,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',
      linkToBookOnline: 'https://www.charlestonharbortours.com',
      schedule: [
        {
          day: 'Monday',
          open: true,
          time: '11:30AM, 1:30PM, 3:30PM'
        },
        {
          day: 'Tuesday',
          open: true,
          time: '11:30AM, 1:30PM, 3:30PM'
        },
        {
          day: 'Wednesday',
          open: true,
          time: '11:30AM, 1:30PM, 3:30PM'
        },
        {
          day: 'Thursday',
          open: true,
          time: '11:30AM, 1:30PM, 3:30PM'
        },
        {
          day: 'Friday',
          open: true,
          time: '11:30AM, 1:30PM, 3:30PM'
        },
        {
          day: 'Saturday',
          open: true,
          time: '11:30AM, 1:30PM, 3:30PM'
        },
        {
          day: 'Sunday',
          open: true,
          time: '11:30AM, 1:30PM, 3:30PM'
        }
      ],
      options: [
        'adventure',
        'boat',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ]
    },
    {
      tourName: 'Calhoun Mansion',
      _id: 'history_calhoun-mansion',
      companyName: 'Calhoun Mansion',
      address: '',
      phone: 8437228205,
      price: 75,
      duration: '1.5 hours',
      desc:
        'Almost a century before it was built, the ground on which George Walton Williams would build his home was hallowed in the tradition of optimistic patriotism. 14-16 Meeting Street in downtown Charleston was originally part of the Lowndes House plot owned by Governor Charles Pinckney, who hosted George Washington three times in 1791.  The New Grand Tour is an hour and half long. It covers the entire Mansion, including the Italianate tower. ',
      img:
        'data:image/jpeg;base64,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',
      linkToBookOnline: 'http://www.calhounmansion.net/tour_schedule/',
      schedule: [
        {
          day: 'Monday',
          open: true,
          time: '11:00am, 12:30pm, 2:00pm, 3:30pm, 5:00pm'
        },
        {
          day: 'Tuesday',
          open: true,
          time: '11:00am, 12:30pm, 2:00pm, 3:30pm, 5:00pm'
        },
        {
          day: 'Wednesday',
          open: true,
          time: '11:00am, 12:30pm, 2:00pm, 3:30pm, 5:00pm'
        },
        {
          day: 'Thursday',
          open: true,
          time: '11:00am, 12:30pm, 2:00pm, 3:30pm, 5:00pm'
        },
        {
          day: 'Friday',
          open: true,
          time: '11:00am, 12:30pm, 2:00pm, 3:30pm, 5:00pm'
        },
        {
          day: 'Saturday',
          open: true,
          time: '11:00am, 12:30pm, 2:00pm, 3:30pm, 5:00pm'
        },
        {
          day: 'Sunday',
          open: true,
          time: '11:00am, 12:30pm, 2:00pm, 3:30pm, 5:00pm'
        }
      ],

      options: [
        'history',
        'museum',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ]
    },
    {
      tourName: 'Ghosts of Charleston Tour',
      _id: 'haunted_ghosts-of-charleston-tour',
      companyName: 'Tour Charleston',
      address:
        'TOUR CHARLESTON, LLC, 2A CUMBERLAND STREET, CHARLESTON, SC, 29401',
      phone: '843-723-1670',
      price: 25,
      duration: '1.5 hours',
      type: 'walking',
      desc:
        "The highlight of Tour Charleston's Ghosts of Charleston Tour is entering the lush, spellbinding Unitarian Church Graveyard built in 1772. Real time hauntings occur only a handful of times a year. However, since 1996, when we started what is now Charleston's oldest ghost tour, spirits in the Unitarian Church Graveyard have reached out to many people on our tour in visual, tactile and auditory ways.",
      img: './GhostCharTour.jpg',
      linkToBookOnline: 'http://www.tourcharleston.com/ghost-tours/',
      schedule: [
        {
          day: 'Monday',
          open: true,
          time: '7:30pm, 9:30pm'
        },
        {
          day: 'Tuesday',
          open: true,
          time: '7:30pm, 9:30pm'
        },
        {
          day: 'Wednesday',
          open: true,
          time: '7:30pm, 9:30pm'
        },
        {
          day: 'Thursday',
          open: true,
          time: '7:30pm, 9:30pm'
        },
        {
          day: 'Friday',
          open: true,
          time: '7:30pm, 9:30pm'
        },
        {
          day: 'Saturday',
          open: true,
          time: '7:30pm, 9:30pm'
        },
        {
          day: 'Sunday',
          open: true,
          time: '7:30pm, 9:30pm'
        }
      ],

      options: [
        'haunted',
        'walking',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ]
    },

    {
      tourName: 'The Haunted Jail Tour',
      _id: 'haunted_the-haunted-jail-tour',
      companyName: 'BullDog Tours',
      address: '18 Anson Street, Charleston, SC 29401 ',
      price: '25',
      phone: 8437662080,
      duration: '45 minutes',
      desc:
        'Join us for a behind-the-scenes tour of the Old City Jail, which housed some of Charleston’s most infamous criminals, 19th-century pirates, and Civil War prisoners. Located on Magazine Street downtown, the Old City Jail was in operation from 1802 until 1939, and most of the building’s original structures — like the cells and warden’s quarters — remain intact.  Book Your Tour!',
      img:
        'https://upload.wikimedia.org/wikipedia/commons/3/37/Charleston%2C_SC_Old_City_Jail.jpg',
      linkToBookOnline: 'https://bulldogtours.com/the-haunted-jail-tour/',
      schedule: [
        {
          day: 'Monday',
          open: true,
          time: '7:00pm, 8:00pm, 9:00pm, 10:00pm'
        },
        {
          day: 'Tuesday',
          open: true,
          time: '7:00pm, 8:00pm, 9:00pm, 10:00pm'
        },
        {
          day: 'Wednesday',
          open: true,
          time: '7:00pm, 8:00pm, 9:00pm, 10:00pm'
        },
        {
          day: 'Thursday',
          open: true,
          time: '7:00pm, 8:00pm, 9:00pm, 10:00pm'
        },
        {
          day: 'Friday',
          open: true,
          time: '7:00pm, 8:00pm, 9:00pm, 10:00pm'
        },
        {
          day: 'Saturday',
          open: true,
          time: '7:00pm, 8:00pm, 9:00pm, 10:00pm'
        },
        {
          day: 'Sunday',
          open: true,
          time: '7:00pm, 8:00pm, 9:00pm, 10:00pm'
        }
      ],

      options: [
        'haunted',
        'walking',
        'monday',
        'tuesday',
        'wednesday',
        'thursday',
        'friday',
        'saturday',
        'sunday'
      ]
    }
  ])
  .then(result => console.log('Documents successfully uploaded!', result))
  .catch(err => console.log('Error uploading documents', err))

// {
//   tourName: 'Template',
//   _id: 'history_template',
//   companyName: 'F',
//   address: '',
//   price: '',
//   duration: '',
//   type: '',
//   desc: '',
//   img: '',
//   linkToBookOnline: '',
//   ///////////   HOW SHOULD I HANDLE IT WHEN THE TOUR LEAVES EVERY 15
//   //////////    MINUTES EVERY DAY?
//   schedule: [
//     {
//       monday: false,
//       mondayTime: null,
//       tuesday: false,
//       tuesdayTime: null,
//       wednesday: false,
//       wednesdayTime: null,
//       thursday: false,
//       thursdayTime: null,
//       friday: false,
//       fridayTime: null,
//       saturday: true,
//       saturdayTime: '1:00PM',
//       sunday: false,
//       sundayTime: null
//     }
//   ],
//   options: [
//     {
//       history: true,
//       adventure: false,
//       culinary: false,
//       haunted: false,
//       museum: false,
//       carriage: false,
//       boat: false,
//       water: false,
//       walking: true,
//       bike: false,
//       plantation: false,
//       food: false,
//       wine: false,
//       pub: false
//     }
//   ]
// }
// {
//   tourName: 'Template',
//   _id: 'history_template',
//   companyName: 'F',
//   address: '',
//   price: '',
//   duration: '',
//   type: '',
//   desc: '',
//   img: '',
//   linkToBookOnline: '',
//   ///////////   HOW SHOULD I HANDLE IT WHEN THE TOUR LEAVES EVERY 15
//   //////////    MINUTES EVERY DAY?
//   schedule: [
//     {
//       monday: false,
//       mondayTime: null,
//       tuesday: false,
//       tuesdayTime: null,
//       wednesday: false,
//       wednesdayTime: null,
//       thursday: false,
//       thursdayTime: null,
//       friday: false,
//       fridayTime: null,
//       saturday: true,
//       saturdayTime: '1:00PM',
//       sunday: false,
//       sundayTime: null
//     }
//   ],
//   options: [
//     {
//       history: true,
//       adventure: false,
//       culinary: false,
//       haunted: false,
//       museum: false,
//       carriage: false,
//       boat: false,
//       water: false,
//       walking: true,
//       bike: false,
//       plantation: false,
//       food: false,
//       wine: false,
//       pub: false
//     }
//   ]
// }
// {
//   tourName: 'Template',
//   _id: 'history_template',
//   companyName: 'F',
//   address: '',
//   price: '',
//   duration: '',
//   type: '',
//   desc: '',
//   img: '',
//   linkToBookOnline: '',
//   ///////////   HOW SHOULD I HANDLE IT WHEN THE TOUR LEAVES EVERY 15
//   //////////    MINUTES EVERY DAY?
//   schedule: [
//     {
//       monday: false,
//       mondayTime: null,
//       tuesday: false,
//       tuesdayTime: null,
//       wednesday: false,
//       wednesdayTime: null,
//       thursday: false,
//       thursdayTime: null,
//       friday: false,
//       fridayTime: null,
//       saturday: true,
//       saturdayTime: '1:00PM',
//       sunday: false,
//       sundayTime: null
//     }
//   ],
//   options: [
//     {
//       history: true,
//       adventure: false,
//       culinary: false,
//       haunted: false,
//       museum: false,
//       carriage: false,
//       boat: false,
//       water: false,
//       walking: true,
//       bike: false,
//       plantation: false,
//       food: false,
//       wine: false,
//       pub: false
//     }
//   ]
// }
