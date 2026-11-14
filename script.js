// Subject information and real links can be added here as they become available.
const subjects = [
  {
    code: "IS1101",
    name: "Fundamentals of Information Systems",
    icon: "▤",
    notes: [
      {
        title: "Lesson 01: Information Concepts",
        description: "Data, information, knowledge, wisdom (DIKW), and core information concepts.",
        url: "assets/notes/IS1101/IS1101_Lesson_01.pdf"
      },
      {
        title: "Lesson 02: Cost, Value and Quality of Information",
        description: "Characteristics of quality information, cost factors, and value of information.",
        url: "assets/notes/IS1101/IS1101_Lesson_02.pdf"
      },
      {
        title: "Lesson 03: System Concepts",
        description: "Input, process, output, feedback, and foundational system concepts.",
        url: "assets/notes/IS1101/IS1101_Lesson_03.pdf"
      },
      {
        title: "Lesson 04: System Performance and Standards",
        description: "Efficiency, effectiveness, reliability, and information systems standards.",
        url: "assets/notes/IS1101/IS1101_Lesson_04.pdf"
      },
      {
        title: "Lesson 05: System Components and Relationships",
        description: "Hardware, software, people, data, procedures, networks, and their relationships.",
        url: "assets/notes/IS1101/IS1101_Lesson_05.pdf"
      },
      {
        title: "Lesson 06: Organisations and Information Systems",
        description: "Role of information systems in organisations including TPS, MIS, and DSS.",
        url: "assets/notes/IS1101/IS1101_Lesson_06.pdf"
      },
      {
        title: "Lesson 07: Systems Development",
        description: "Systems Development Life Cycle (SDLC), Waterfall, and Agile models.",
        url: "assets/notes/IS1101/IS1101_Lesson_07.pdf"
      },
      {
        title: "Lesson 08: Competitive Advantage",
        description: "Competitive advantage through IS and Porter's Five Forces model.",
        url: "assets/notes/IS1101/IS1101_Lesson_08.pdf"
      },
      {
        title: "Lesson 09: Global Challenges in Information Systems",
        description: "Global issues, security, and privacy challenges in information systems.",
        url: "assets/notes/IS1101/IS1101_Lesson_09.pdf"
      },
      {
        title: "Lesson 10: Information Systems Career Paths",
        description: "Career paths and IT opportunities in information systems.",
        url: "assets/notes/IS1101/IS1101_Lesson_10.pdf"
      }
    ],
    slides: [],
    videos: [
      {
        title: "Lesson 1: Data, Information, Knowledge and Wisdom (DIKW)",
        description: "Explanation of the DIKW hierarchy.",
        url: "https://www.youtube.com/watch?v=NwOBBWWk9g0",
        thumbnail: "https://img.youtube.com/vi/NwOBBWWk9g0/hqdefault.jpg"
      },
      {
        title: "Lesson 1: Introduction to Information Systems",
        description: "Overview of information systems basics.",
        url: "https://youtu.be/g8059-8QDNk",
        thumbnail: "https://img.youtube.com/vi/g8059-8QDNk/hqdefault.jpg"
      },
      {
        title: "Lesson 1: DIKW Model – More Explanations",
        description: "YouTube search results for DIKW explanations.",
        url: "https://www.youtube.com/results?search_query=data+information+knowledge+wisdom+explained"
      },
      {
        title: "Lesson 2: Quality of Information",
        description: "YouTube search results for characteristics of quality information in MIS.",
        url: "https://www.youtube.com/results?search_query=characteristics+of+good+quality+information+MIS"
      },
      {
        title: "Lesson 2: Value of Information",
        description: "YouTube search results for cost and value of information.",
        url: "https://www.youtube.com/results?search_query=cost+and+value+of+information+management+information+systems"
      },
      {
        title: "Lesson 3: What is an Information System?",
        description: "Core concepts of what makes up an information system.",
        url: "https://www.youtube.com/watch?v=Qujsd4vkqFI",
        thumbnail: "https://img.youtube.com/vi/Qujsd4vkqFI/hqdefault.jpg"
      },
      {
        title: "Lesson 3: System Concepts (Input, Process, Output, Feedback)",
        description: "YouTube search results for system concepts in information systems.",
        url: "https://www.youtube.com/results?search_query=system+concepts+input+process+output+feedback+information+systems"
      },
      {
        title: "Lesson 4: System Performance (Efficiency, Effectiveness, Reliability)",
        description: "YouTube search results for system performance in MIS.",
        url: "https://www.youtube.com/results?search_query=system+performance+efficiency+effectiveness+reliability+MIS"
      },
      {
        title: "Lesson 4: Information Systems Standards",
        description: "YouTube search results for IS standards.",
        url: "https://www.youtube.com/results?search_query=information+systems+standards+explained"
      },
      {
        title: "Lesson 5: The 5 Components of an Information System",
        description: "Breakdown of the five key components of an IS.",
        url: "https://www.youtube.com/watch?v=XlcolUHMnh0",
        thumbnail: "https://img.youtube.com/vi/XlcolUHMnh0/hqdefault.jpg"
      },
      {
        title: "Lesson 5: Components of Information Systems",
        description: "YouTube search results for hardware, software, people, data, procedures, and networks.",
        url: "https://www.youtube.com/results?search_query=hardware+software+people+data+procedures+networks+information+system"
      },
      {
        title: "Lesson 6: Role of Information Systems in Organisations",
        description: "How organisations use information systems.",
        url: "https://youtu.be/A2dTPbLomTA",
        thumbnail: "https://img.youtube.com/vi/A2dTPbLomTA/hqdefault.jpg"
      },
      {
        title: "Lesson 6: Types of Information Systems (TPS, MIS, DSS)",
        description: "Comparison of TPS, MIS, and DSS.",
        url: "https://youtu.be/nQ4Q3iN7TMM",
        thumbnail: "https://img.youtube.com/vi/nQ4Q3iN7TMM/hqdefault.jpg"
      },
      {
        title: "Lesson 7: Systems Development Life Cycle (SDLC)",
        description: "Phases of the Systems Development Life Cycle.",
        url: "https://www.youtube.com/watch?v=3a7I0tGrF-Q",
        thumbnail: "https://img.youtube.com/vi/3a7I0tGrF-Q/hqdefault.jpg"
      },
      {
        title: "Lesson 7: Waterfall and Agile Models",
        description: "YouTube search results for Waterfall and Agile models.",
        url: "https://www.youtube.com/results?search_query=waterfall+and+agile+software+development+models+explained"
      },
      {
        title: "Lesson 8: Competitive Advantage Through Information Systems",
        description: "YouTube search results for gaining competitive advantage with IS.",
        url: "https://www.youtube.com/results?search_query=competitive+advantage+through+information+systems"
      },
      {
        title: "Lesson 8: Porter's Five Forces Explained",
        description: "YouTube search results for Porter's Five Forces model.",
        url: "https://www.youtube.com/results?search_query=Porters+five+forces+model+explained"
      },
      {
        title: "Lesson 9: Global Issues in Information Systems",
        description: "YouTube search results for global challenges in IS.",
        url: "https://www.youtube.com/results?search_query=global+challenges+in+information+systems"
      },
      {
        title: "Lesson 9: Information Systems Security and Privacy",
        description: "YouTube search results for IS security and privacy.",
        url: "https://www.youtube.com/results?search_query=information+systems+security+privacy+explained"
      },
      {
        title: "Lesson 10: Careers in Information Technology",
        description: "YouTube search results for IS career paths.",
        url: "https://www.youtube.com/results?search_query=information+systems+career+paths+explained"
      },
      {
        title: "Lesson 10: IT Career Opportunities",
        description: "YouTube search results for systems analyst, DBA, and cybersecurity roles.",
        url: "https://www.youtube.com/results?search_query=IT+careers+systems+analyst+database+administrator+cybersecurity"
      }
    ],
    papers: []
  },
  {
    code: "IS1102",
    name: "Structured Programming Techniques",
    icon: "⌘",
    notes: [
      {
        title: "Introduction to Structured Programming Techniques (Notes 1)",
        description: "Core concepts and foundations of structured programming.",
        url: "assets/notes/IS1102/IS1102 - Structured_Programming_Techniques_Introduction_Notes1.pdf"
      },
      {
        title: "Structured Programming Techniques in C (Notes 2)",
        description: "Applying structured programming techniques using the C language.",
        url: "assets/notes/IS1102/IS1102 - Structured_Programming_Techniques_C_Notes2.pdf"
      },
      {
        title: "Boolean Logic in Structured Programming (Notes 3)",
        description: "Boolean logic concepts used in program design and conditions.",
        url: "assets/notes/IS1102/IS1102 - Boolean_Logic_Structured_Programming_Study_Notes3.pdf"
      },
      {
        title: "Boolean and Boolean Operators (Notes 4)",
        description: "Logical expressions, relational checks, and Boolean operators.",
        url: "assets/notes/IS1102/IS1102 - Boolean_and_Boolean_Operators_Study_Notes4.pdf"
      },
      {
        title: "Control Statements in Structured Programming (Notes 5)",
        description: "Conditional branching and decision-making control structures.",
        url: "assets/notes/IS1102/IS1102 - Structured_Programming_Control_Statements_Study_Notes5.pdf"
      },
      {
        title: "Loops in Structured Programming (Notes 6)",
        description: "Iteration constructs including while, do-while, and for loops.",
        url: "assets/notes/IS1102/IS1102 - Structured_Programming_Techniques_Loops_Notes6.pdf"
      },
      {
        title: "Arrays Study Notes (Notes 7)",
        description: "Working with single and multi-dimensional arrays.",
        url: "assets/notes/IS1102/IS1102 - Arrays_Study_Notes7.pdf"
      },
      {
        title: "Structured Programming Activity Sheet",
        description: "Practice exercises and activities for IS1102.",
        url: "assets/notes/IS1102/IS1102 - Activity.pdf"
      }
    ],
    slides: [],
    videos: [],
    papers: []
  },
  {
    code: "IS1103",
    name: "Structured Programming Practicum",
    icon: "⌨",
    notes: [],
    slides: [
      {
        title: "Lecture 02",
        description: "Structured Programming Practicum presentation slides.",
        url: "assets/notes/IS1103/IS1103 - Lecture 02.pptx"
      },
      {
        title: "Lecture 02 (Part II)",
        description: "Continuation of Lecture 02 practicum slides.",
        url: "assets/notes/IS1103/IS1103 - Lecture 02_II.pptx"
      },
      {
        title: "Lecture 03",
        description: "Structured Programming Practicum presentation slides.",
        url: "assets/notes/IS1103/IS1103 - Lecture 03.pptx"
      },
      {
        title: "Lecture 03 (Part II)",
        description: "Continuation of Lecture 03 practicum slides.",
        url: "assets/notes/IS1103/IS1103 - Lecture 03_II.pptx"
      },
      {
        title: "Lecture 04",
        description: "Structured Programming Practicum presentation slides.",
        url: "assets/notes/IS1103/IS1103 - Lecture 04.pptx"
      },
      {
        title: "Lecture 05",
        description: "Structured Programming Practicum presentation slides.",
        url: "assets/notes/IS1103/IS1103 - Lecture 05.pptx"
      },
      {
        title: "Lecture 06",
        description: "Structured Programming Practicum presentation slides.",
        url: "assets/notes/IS1103/IS1103 - Lecture 06.pptx"
      },
      {
        title: "Lecture 06 (Part II)",
        description: "Continuation of Lecture 06 practicum slides.",
        url: "assets/notes/IS1103/IS1103 - Lecture 06 -II.pptx"
      },
      {
        title: "Lecture 07",
        description: "Structured Programming Practicum presentation slides.",
        url: "assets/notes/IS1103/IS1103 - Lecture 07.pptx"
      },
      {
        title: "Lecture 07 (Part II)",
        description: "Continuation of Lecture 07 practicum slides.",
        url: "assets/notes/IS1103/IS1103 - Lecture 07 -  II.pptx"
      },
      {
        title: "Lecture 08",
        description: "Structured Programming Practicum presentation slides.",
        url: "assets/notes/IS1103/IS1103 - Lecture 08.pptx"
      },
      {
        title: "Lecture 08 (Part II)",
        description: "Continuation of Lecture 08 practicum slides.",
        url: "assets/notes/IS1103/IS1103 - Lecture 08 - II.pptx"
      },
      {
        title: "Lecture 09",
        description: "Structured Programming Practicum presentation slides.",
        url: "assets/notes/IS1103/IS1103 - Lecture 09.pptx"
      },
      {
        title: "Lecture 09 (Part II)",
        description: "Continuation of Lecture 09 practicum slides.",
        url: "assets/notes/IS1103/IS1103 - Lecture 09 -II.pptx"
      },
      {
        title: "Lecture 10",
        description: "Structured Programming Practicum presentation slides.",
        url: "assets/notes/IS1103/IS1103- Lecture 10.pptx"
      }
    ],
    videos: [
      {
        title: "#1: Getting Started with C Programming [2025]",
        description: "C Programming for Beginners – environment setup and first program.",
        url: "https://youtu.be/KnvbUiSxvbM",
        thumbnail: "https://img.youtube.com/vi/KnvbUiSxvbM/hqdefault.jpg"
      },
      {
        title: "#2: C Variables and Print Output [2025]",
        description: "Declaring variables and printing output in C.",
        url: "https://youtu.be/h4VBpylsjJc",
        thumbnail: "https://img.youtube.com/vi/h4VBpylsjJc/hqdefault.jpg"
      },
      {
        title: "#3: Data Types in C Programming [2025]",
        description: "Primitive data types in C.",
        url: "https://youtu.be/sARaqR0hRI4",
        thumbnail: "https://img.youtube.com/vi/sARaqR0hRI4/hqdefault.jpg"
      },
      {
        title: "#4: Get User Input in C Programming",
        description: "Reading input from the user using scanf.",
        url: "https://youtu.be/17gp5DJEyiw",
        thumbnail: "https://img.youtube.com/vi/17gp5DJEyiw/hqdefault.jpg"
      },
      {
        title: "#5: Comments in C Programming [2025]",
        description: "Writing single-line and multi-line comments in C.",
        url: "https://youtu.be/L2H2rtCLB-0",
        thumbnail: "https://img.youtube.com/vi/L2H2rtCLB-0/hqdefault.jpg"
      },
      {
        title: "#6: C Operators [2025]",
        description: "Arithmetic and assignment operators in C.",
        url: "https://youtu.be/_57FcSBtJNU",
        thumbnail: "https://img.youtube.com/vi/_57FcSBtJNU/hqdefault.jpg"
      },
      {
        title: "#7: Type Conversion in C",
        description: "Implicit and explicit type conversion in C.",
        url: "https://youtu.be/xi2wf0Zy2Y4",
        thumbnail: "https://img.youtube.com/vi/xi2wf0Zy2Y4/hqdefault.jpg"
      },
      {
        title: "#8: Boolean and Comparison Operators in C Programming",
        description: "Working with booleans and comparison operators in C.",
        url: "https://youtu.be/TybmJxXRV80",
        thumbnail: "https://img.youtube.com/vi/TybmJxXRV80/hqdefault.jpg"
      },
      {
        title: "#9: If Else Statements in C [2025]",
        description: "Conditional branching with if, else if, and else.",
        url: "https://youtu.be/K8mntKyBJGc",
        thumbnail: "https://img.youtube.com/vi/K8mntKyBJGc/hqdefault.jpg"
      },
      {
        title: "#10: Ternary Operator in C",
        description: "Using the conditional ternary operator in C.",
        url: "https://youtu.be/05xv2nMj6Ls",
        thumbnail: "https://img.youtube.com/vi/05xv2nMj6Ls/hqdefault.jpg"
      },
      {
        title: "#11: Switch Statement in C [2025]",
        description: "Multi-way branching with switch-case statements.",
        url: "https://youtu.be/u6mb8NNwojA",
        thumbnail: "https://img.youtube.com/vi/u6mb8NNwojA/hqdefault.jpg"
      },
      {
        title: "#12: while Loop in C Programming [2025]",
        description: "Repeating code blocks with while and do-while loops.",
        url: "https://youtu.be/WgS_SF1VrEk",
        thumbnail: "https://img.youtube.com/vi/WgS_SF1VrEk/hqdefault.jpg"
      },
      {
        title: "#13: for Loop in C Programming",
        description: "Counter-controlled loops using for statements.",
        url: "https://youtu.be/Xtl1oGtcX-8",
        thumbnail: "https://img.youtube.com/vi/Xtl1oGtcX-8/hqdefault.jpg"
      },
      {
        title: "#14: break and continue in C",
        description: "Controlling loop execution with break and continue.",
        url: "https://youtu.be/DpPf9XskST8",
        thumbnail: "https://img.youtube.com/vi/DpPf9XskST8/hqdefault.jpg"
      },
      {
        title: "#15: C Functions [2025]",
        description: "Defining and calling functions in C.",
        url: "https://youtu.be/Npo1u37lcg8",
        thumbnail: "https://img.youtube.com/vi/Npo1u37lcg8/hqdefault.jpg"
      }
    ],
    papers: [
      {
        title: "IS1103 Quiz 01",
        description: "Quiz 01 assessment document for Structured Programming Practicum.",
        url: "assets/notes/IS1103/Quiz 01.docx.pdf"
      }
    ]
  },
  {
    code: "IS1104",
    name: "Theories of Information Systems",
    icon: "◉",
    notes: [
      {
        title: "01: Lifecycle and Technology Adoption",
        description: "Short notes on IS lifecycle models and technology adoption theories.",
        url: "assets/notes/IS1104/01_IS1104_Lifecycle_and_Technology_Adoption_Short_Notes.pdf"
      },
      {
        title: "02: Strategic and Economic Theories",
        description: "Short notes on strategic and economic theories in information systems.",
        url: "assets/notes/IS1104/02_IS1104Strategic_and_Economic_Theories_Short_Notes.pdf"
      },
      {
        title: "03: Socio-Psychological Theories",
        description: "Short notes on socio-psychological theories related to IS.",
        url: "assets/notes/IS1104/03_IS1104Socio_Psychological_Theories_Short_Notes.pdf"
      },
      {
        title: "04: Organisational and Social Theories",
        description: "Short notes on organisational and social theories in IS.",
        url: "assets/notes/IS1104/04_IS1104Organisational_and_Social_Theories_Short_Notes.pdf"
      },
      {
        title: "05: Methodological Theories and Research Methods",
        description: "Short notes on methodological theories and IS research methods.",
        url: "assets/notes/IS1104/05_IS1104Methodological_Theories_and_Research_Methods_Short_Notes.pdf"
      }
    ],
    slides: [],
    videos: [],
    papers: []
  },
  {
    code: "IS1105",
    name: "Computer System Organization",
    icon: "▦",
    notes: [
      {
        title: "All 14 Lessons (Separate PDFs Bundle)",
        description: "ZIP archive containing separate study note PDFs for Lessons 01–14.",
        url: "assets/notes/IS1105/IS1105_All_14_Lessons_Separate_PDFs.zip"
      }
    ],
    slides: [],
    videos: [
      {
        title: "Lesson 01: Introduction to Computer Organization and Architecture",
        description: "Neso Academy – basic concepts, organization, and architecture.",
        url: "https://www.youtube.com/watch?v=Ol8D69VKX2k",
        thumbnail: "https://img.youtube.com/vi/Ol8D69VKX2k/hqdefault.jpg"
      },
      {
        title: "Lesson 01: Basics of Computer Architecture",
        description: "Neso Academy – foundational computer architecture concepts.",
        url: "https://www.youtube.com/watch?v=GRInNLx3Tug",
        thumbnail: "https://img.youtube.com/vi/GRInNLx3Tug/hqdefault.jpg"
      },
      {
        title: "Lesson 02: Intel x86 Architecture Evolution",
        description: "YouTube search results for x86 architecture evolution.",
        url: "https://www.youtube.com/results?search_query=Intel+x86+architecture+evolution+explained"
      },
      {
        title: "Lesson 02: Embedded Systems Introduction",
        description: "YouTube search results for embedded systems in computer organization.",
        url: "https://www.youtube.com/results?search_query=embedded+systems+introduction+computer+organization"
      },
      {
        title: "Lesson 02: ARM Architecture Explained",
        description: "YouTube search results for ARM processor architecture.",
        url: "https://www.youtube.com/results?search_query=ARM+architecture+computer+organization+explained"
      },
      {
        title: "Lesson 03: Computer Performance, CPI and CPU Time",
        description: "YouTube search results for CPU time, CPI, and clock rate.",
        url: "https://www.youtube.com/results?search_query=computer+performance+CPU+time+CPI+clock+rate+explained"
      },
      {
        title: "Lesson 03: Multicore Processors and Parallel Performance",
        description: "YouTube search results for multicore processor architecture.",
        url: "https://www.youtube.com/results?search_query=multicore+processor+architecture+explained"
      },
      {
        title: "Lesson 03 & 13: GPGPU / GPU Architecture",
        description: "Overview of GPU and general-purpose GPU architecture.",
        url: "https://www.youtube.com/watch?v=OSks4GxOyrA",
        thumbnail: "https://img.youtube.com/vi/OSks4GxOyrA/hqdefault.jpg"
      },
      {
        title: "Lesson 03: SPEC Benchmarks",
        description: "YouTube search results for SPEC CPU benchmarks.",
        url: "https://www.youtube.com/results?search_query=SPEC+CPU+benchmark+computer+architecture"
      },
      {
        title: "Lesson 04: Data, Address and Control Buses",
        description: "YouTube search results for computer system buses.",
        url: "https://www.youtube.com/results?search_query=computer+organization+data+address+control+bus+explained"
      },
      {
        title: "Lesson 04: Point-to-Point Interconnection",
        description: "YouTube search results for point-to-point interconnection.",
        url: "https://www.youtube.com/results?search_query=point+to+point+interconnection+computer+architecture"
      },
      {
        title: "Lesson 04 & 06: Computer Buses and Interconnection",
        description: "Video lecture on computer buses, interconnection, and I/O.",
        url: "https://www.youtube.com/watch?v=FjvoJofCaTs",
        thumbnail: "https://img.youtube.com/vi/FjvoJofCaTs/hqdefault.jpg"
      },
      {
        title: "Lesson 05: Memory Hierarchy and Cache Memory",
        description: "YouTube search results for memory hierarchy and cache.",
        url: "https://www.youtube.com/results?search_query=memory+hierarchy+cache+memory+computer+organization"
      },
      {
        title: "Lesson 05: Cache Memory and Locality",
        description: "YouTube search results for temporal and spatial locality.",
        url: "https://www.youtube.com/results?search_query=cache+memory+temporal+spatial+locality+explained"
      },
      {
        title: "Lesson 05: Semiconductor Memory (SRAM vs DRAM)",
        description: "YouTube search results comparing SRAM and DRAM.",
        url: "https://www.youtube.com/results?search_query=SRAM+vs+DRAM+semiconductor+memory+explained"
      },
      {
        title: "Lesson 05: External / Secondary Memory",
        description: "YouTube search results for HDD and SSD secondary storage.",
        url: "https://www.youtube.com/results?search_query=secondary+storage+HDD+SSD+computer+organization"
      },
      {
        title: "Lesson 06: Input-Output Organization",
        description: "Overview of input and output organization.",
        url: "https://www.youtube.com/watch?v=Y17TLZCSe4M",
        thumbnail: "https://img.youtube.com/vi/Y17TLZCSe4M/hqdefault.jpg"
      },
      {
        title: "Lesson 06: Programmed I/O, Interrupt-Driven I/O and DMA",
        description: "YouTube search results for I/O transfer techniques.",
        url: "https://www.youtube.com/results?search_query=programmed+IO+interrupt+driven+IO+DMA+explained"
      },
      {
        title: "Lesson 06: I/O Channels and Processors",
        description: "YouTube search results for I/O channels and processors.",
        url: "https://www.youtube.com/results?search_query=IO+channels+and+IO+processors+computer+organization"
      },
      {
        title: "Lesson 07: Number System Conversions",
        description: "YouTube search results for binary, decimal, octal, and hex conversions.",
        url: "https://www.youtube.com/results?search_query=number+system+conversion+binary+decimal+octal+hexadecimal"
      },
      {
        title: "Lesson 07: Signed Integers and Two's Complement",
        description: "YouTube search results for two's complement representation.",
        url: "https://www.youtube.com/results?search_query=two%27s+complement+integer+representation+explained"
      },
      {
        title: "Lesson 07: Binary Arithmetic",
        description: "YouTube search results for binary addition and subtraction.",
        url: "https://www.youtube.com/results?search_query=binary+addition+subtraction+computer+organization"
      },
      {
        title: "Lesson 08: IEEE 754 Floating-Point Representation",
        description: "YouTube search results for IEEE 754 floating-point format.",
        url: "https://www.youtube.com/results?search_query=IEEE+754+floating+point+representation+explained"
      },
      {
        title: "Lesson 08: Logic Gates and Truth Tables",
        description: "YouTube search results for digital logic gates and truth tables.",
        url: "https://www.youtube.com/results?search_query=digital+logic+gates+truth+tables+explained"
      },
      {
        title: "Lesson 08: Boolean Algebra and De Morgan's Laws",
        description: "YouTube search results for Boolean algebra laws.",
        url: "https://www.youtube.com/results?search_query=Boolean+algebra+De+Morgans+laws+digital+logic"
      },
      {
        title: "Lesson 09: Half Adder and Full Adder",
        description: "YouTube search results for combinational adder circuits.",
        url: "https://www.youtube.com/results?search_query=half+adder+full+adder+digital+logic+explained"
      },
      {
        title: "Lesson 09: Multiplexers and Decoders",
        description: "YouTube search results for multiplexers and decoders.",
        url: "https://www.youtube.com/results?search_query=multiplexer+decoder+digital+logic+explained"
      },
      {
        title: "Lesson 09: Programmable Logic Devices (PROM, PAL, PLA, FPGA)",
        description: "YouTube search results for programmable logic devices.",
        url: "https://www.youtube.com/results?search_query=programmable+logic+devices+PROM+PAL+PLA+FPGA+explained"
      },
      {
        title: "Lesson 10: SR, JK, D and T Flip-Flops",
        description: "YouTube search results for sequential flip-flop circuits.",
        url: "https://www.youtube.com/results?search_query=SR+JK+D+T+flip+flops+explained"
      },
      {
        title: "Lesson 10: Registers and Counters",
        description: "YouTube search results for registers and counters.",
        url: "https://www.youtube.com/results?search_query=digital+logic+registers+counters+explained"
      },
      {
        title: "Lesson 11: Instruction Formats and Addressing Modes",
        description: "Machine instruction formats and CPU addressing modes.",
        url: "https://www.youtube.com/watch?v=s4cVdsK3XiQ",
        thumbnail: "https://img.youtube.com/vi/s4cVdsK3XiQ/hqdefault.jpg"
      },
      {
        title: "Lesson 11 & 14: Assembly Language Programming Basics",
        description: "Introduction to assembly language programming.",
        url: "https://www.youtube.com/watch?v=py5dDqOHlDk",
        thumbnail: "https://img.youtube.com/vi/py5dDqOHlDk/hqdefault.jpg"
      },
      {
        title: "Lesson 12: Instruction-Level Parallelism and Superscalar",
        description: "YouTube search results for ILP and superscalar processors.",
        url: "https://www.youtube.com/results?search_query=instruction+level+parallelism+superscalar+processor+explained"
      },
      {
        title: "Lesson 12: Pipelining Concepts",
        description: "CPU instruction pipelining explained.",
        url: "https://www.youtube.com/watch?v=R41DfN3NpIM",
        thumbnail: "https://img.youtube.com/vi/R41DfN3NpIM/hqdefault.jpg"
      },
      {
        title: "Lesson 12: Superscalar Processors",
        description: "YouTube search results for superscalar architecture.",
        url: "https://www.youtube.com/results?search_query=superscalar+processor+architecture+explained"
      },
      {
        title: "Lesson 13: Parallel Processing and Multicore Computers",
        description: "YouTube search results for parallel processing architectures.",
        url: "https://www.youtube.com/results?search_query=parallel+processing+multicore+computer+architecture+explained"
      },
      {
        title: "Lesson 13: General-Purpose GPU Computing",
        description: "YouTube search results for GPGPU computing.",
        url: "https://www.youtube.com/results?search_query=GPGPU+general+purpose+GPU+computing+explained"
      },
      {
        title: "Lesson 14: Digital Logic Design and Simulation",
        description: "YouTube search results for logic design and simulation tutorials.",
        url: "https://www.youtube.com/results?search_query=digital+logic+design+simulation+tutorial+logic+gates"
      },
      {
        title: "Lesson 14: Boolean Function Simplification and Karnaugh Maps",
        description: "YouTube search results for Karnaugh map simplification.",
        url: "https://www.youtube.com/results?search_query=Boolean+function+simplification+Karnaugh+map+tutorial"
      },
      {
        title: "Lesson 14: FSM Analysis and Design (Moore & Mealy)",
        description: "YouTube search results for finite state machine design.",
        url: "https://www.youtube.com/results?search_query=finite+state+machine+FSM+analysis+design+Moore+Mealy"
      },
      {
        title: "University of Toronto: Computer Organization Video Resources",
        description: "Complete video modules covering caches, logic devices, flip-flops, CPU, and MIPS assembly.",
        url: "https://mcs.utm.utoronto.ca/~pcrs/computer_org/"
      },
      {
        title: "NPTEL / IIT Kharagpur: Computer Organization Lectures",
        description: "YouTube search results for NPTEL computer organization and architecture lectures.",
        url: "https://www.youtube.com/results?search_query=NPTEL+computer+organization+architecture+lectures"
      }
    ],
    papers: []
  },
  {
    code: "IS1106",
    name: "Foundations of Web Technologies",
    icon: "〈〉",
    notes: [
      {
        title: "Internet Fundamentals, WWW & Web Evolution",
        description: "Internet vs WWW, web evolution, static and dynamic pages, client-server architecture, and scripting.",
        url: "assets/notes/IS1106/IS1106 - Internet_WWW_Web_Evolution_Notes1.pdf"
      },
      {
        title: "Web Browsers, Web Servers & Internet Protocols",
        description: "Browsers, web servers, TCP/IP, UDP, HTTP, FTP, DNS, communication, and URL components.",
        url: "assets/notes/IS1106/IS1106 - Web_Browsers_Servers_Protocols_Notes2.pdf"
      },
      {
        title: "HTTP Fundamentals: Frontend and Backend",
        description: "An introduction to HTTP fundamentals and how frontend and backend components communicate.",
        url: "assets/notes/IS1106/IS1106 - HTTP_Fundamentals_Frontend_Backend_Notes3.pdf"
      },
      {
        title: "Frontend: HTML, CSS, and JavaScript",
        description: "Study notes covering the core frontend technologies: HTML, CSS, and JavaScript.",
        url: "assets/notes/IS1106/IS1106 - Frontend_HTML_CSS_JS_Notes4.pdf"
      },
      {
        title: "Web Application Development Principles and Best Practices",
        description: "Principles and best practices for designing and developing web applications.",
        url: "assets/notes/IS1106/IS1106 - Web_Application_Development_Principles_and_Best_Practices_Notes5.pdf"
      }
    ],
    slides: [
      {
        title: "Ajax Practical Presentation",
        description: "Practical lesson presentation introducing Ajax and its use in web applications.",
        url: "assets/notes/IS1106/Ajax_Practical_Presentation.pptx"
      },
      {
        title: "CSS Practical Lesson",
        description: "Semester 1 practical lesson covering CSS concepts and exercises.",
        url: "assets/notes/IS1106/CSS_Practical_Lesson_IS_Semester_1.pptx"
      },
      {
        title: "HTML Practical Lesson",
        description: "Semester 1 practical lesson covering HTML concepts and exercises.",
        url: "assets/notes/IS1106/HTML_Practical_Lesson_IS_Semester_1.pptx"
      },
      {
        title: "HTML Practical Lesson Presentation",
        description: "Presentation for the HTML practical lesson.",
        url: "assets/notes/IS1106/HTML_Practical_Lesson_Presentation.pptx"
      },
      {
        title: "JavaScript Practical Lesson",
        description: "Semester 1 practical lesson covering JavaScript concepts and exercises.",
        url: "assets/notes/IS1106/JavaScript_Practical_Lesson_IS_Semester_1.pptx"
      },
      {
        title: "TypeScript Practical Lesson",
        description: "Semester 1 practical lesson covering TypeScript concepts and exercises.",
        url: "assets/notes/IS1106/TypeScript_Practical_Lesson_IS_Semester_1.pptx"
      }
    ],
    videos: [
      {
        title: "Introduction to Web Technologies",
        description: "Foundations of web technologies tutorial.",
        url: "https://www.youtube.com/watch?v=oC9bhOqik-A",
        thumbnail: "https://img.youtube.com/vi/oC9bhOqik-A/hqdefault.jpg"
      },
      {
        title: "Web Technologies Tutorial",
        description: "An additional introduction to web technologies.",
        url: "https://www.youtube.com/watch?v=it1rTvBcfRg",
        thumbnail: "https://img.youtube.com/vi/it1rTvBcfRg/hqdefault.jpg"
      },
      {
        title: "HTML Tutorial",
        description: "Learn the fundamentals of HTML.",
        url: "https://www.youtube.com/watch?v=AGDDdsiZ0Ko",
        thumbnail: "https://img.youtube.com/vi/AGDDdsiZ0Ko/hqdefault.jpg"
      },
      {
        title: "CSS Tutorial",
        description: "Learn the fundamentals of CSS.",
        url: "https://www.youtube.com/watch?v=zofMnllkVfI",
        thumbnail: "https://img.youtube.com/vi/zofMnllkVfI/hqdefault.jpg"
      }
    ],
    papers: [
      {
        title: "IS1106 Model Paper",
        description: "Model paper for Foundations of Web Technologies (IS1106).",
        url: "assets/notes/IS1106/Model Paper.pdf"
      }
    ]
  },
  {
    code: "IS1107",
    name: "Personal Productivity with Information Technology",
    icon: "✦",
    notes: [
      {
        title: "01: Knowledge Work Productivity",
        description: "Improving personal and knowledge work productivity with IT tools.",
        url: "assets/notes/IS1107/01_Knowledge_Work_Productivity.pdf"
      },
      {
        title: "02: DAX and Power BI",
        description: "Data analysis expressions (DAX) and business intelligence reporting in Power BI.",
        url: "assets/notes/IS1107/02_DAX_and_Power_BI.pdf"
      },
      {
        title: "03: Pivots, Charts, Tables and What-If Analysis",
        description: "Spreadsheet analysis with pivot tables, charts, tables, and what-if tools.",
        url: "assets/notes/IS1107/03_Pivots_Charts_Tables_WhatIf.pdf"
      },
      {
        title: "04: Professional Document Design with LaTeX",
        description: "Typesetting and structured document design using LaTeX.",
        url: "assets/notes/IS1107/04_Professional_Document_Design_LaTeX.pdf"
      },
      {
        title: "05: Digital Communication, Email and Shared Documents",
        description: "Effective digital communication practices and collaborative documents.",
        url: "assets/notes/IS1107/05_Digital_Communication_Email_Shared_Documents.pdf"
      },
      {
        title: "06: Presentation Design (LaTeX & PowerPoint)",
        description: "Designing clear, effective presentations using LaTeX and PowerPoint.",
        url: "assets/notes/IS1107/06_Presentation_Design_LaTeX_PowerPoint.pdf"
      },
      {
        title: "07: Explaining Scientific Materials to Lay Audiences",
        description: "Communicating technical and scientific concepts clearly to general audiences.",
        url: "assets/notes/IS1107/07_Explaining_Scientific_Materials_to_Lay_Audiences.pdf"
      },
      {
        title: "08: Ethics and Plagiarism",
        description: "Ethical IT usage, academic integrity, and avoiding plagiarism.",
        url: "assets/notes/IS1107/08_Ethics_and_Plagiarism.pdf"
      }
    ],
    slides: [],
    videos: [],
    papers: []
  },
  {
    code: "IS1108",
    name: "Fundamentals of Mathematics",
    icon: "∑",
    notes: [
      {
        title: "Unit 01: Linear Algebra and Matrices",
        description: "Introduction to linear algebra concepts and matrix operations.",
        url: "assets/notes/IS1108/IS1108_Unit_01_Linear_Algebra_and_Matrices.pdf"
      },
      {
        title: "Unit 02: Vector Spaces and Subspaces",
        description: "Properties of vector spaces and subspaces.",
        url: "assets/notes/IS1108/IS1108_Unit_02_Vector_Spaces_and_Subspaces.pdf"
      },
      {
        title: "Unit 03: Linear Independence, Basis, Dimension and Rank",
        description: "Linear independence, basis vectors, dimension, and matrix rank.",
        url: "assets/notes/IS1108/IS1108_Unit_03_Linear_Independence_Basis_Dimension_and_Rank.pdf"
      },
      {
        title: "Unit 04: Linear Transformations and Systems of Linear Equations",
        description: "Linear transformations and solving systems of linear equations.",
        url: "assets/notes/IS1108/IS1108_Unit_04_Linear_Transformations_and_Systems_of_Linear_Equations.pdf"
      },
      {
        title: "Unit 05: Determinants and Diagonalization of Matrices",
        description: "Determinants, eigenvalues/eigenvectors, and matrix diagonalization.",
        url: "assets/notes/IS1108/IS1108_Unit_05_Determinants_and_Diagonalization_of_Matrices.pdf"
      },
      {
        title: "Unit 06: Functions, Relations and Sets",
        description: "Set theory, relations, and mathematical functions.",
        url: "assets/notes/IS1108/IS1108_Unit_06_Functions_Relations_and_Sets.pdf"
      },
      {
        title: "Unit 07: Cartesian Products, Ordered Pairs and Bijective Mappings",
        description: "Cardinality, Cartesian products, ordered pairs, and bijections.",
        url: "assets/notes/IS1108/IS1108_Unit_07_Cartesian_Products_Ordered_Pairs_and_Bijective_Mappings.pdf"
      },
      {
        title: "Unit 08: Equivalence Relations",
        description: "Reflexive, symmetric, transitive properties, and equivalence relations.",
        url: "assets/notes/IS1108/IS1108_Unit_08_Equivalence_Relations.pdf"
      },
      {
        title: "Unit 09: Logic Propositions and Truth Tables",
        description: "Propositional logic, logical connectives, and truth tables.",
        url: "assets/notes/IS1108/IS1108_Unit_09_Logic_Propositions_and_Truth_Tables.pdf"
      },
      {
        title: "Unit 10: Symbolic Statements and Normal Forms",
        description: "Symbolic logic statements, CNF, and DNF normal forms.",
        url: "assets/notes/IS1108/IS1108_Unit_10_Symbolic_Statements_and_Normal_Forms.pdf"
      },
      {
        title: "Unit 11: Karnaugh Maps",
        description: "2, 3, and 4 variable Karnaugh maps for Boolean simplification.",
        url: "assets/notes/IS1108/IS1108_Unit_11_Karnaugh_Maps.pdf"
      }
    ],
    slides: [],
    videos: [
      {
        title: "Unit 01: Linear Algebra",
        description: "YouTube search results for linear algebra explanations.",
        url: "https://www.youtube.com/results?search_query=linear+algebra+explained"
      },
      {
        title: "Unit 01: Matrices",
        description: "YouTube search results for matrices explained with examples.",
        url: "https://www.youtube.com/results?search_query=matrices+explained+with+examples"
      },
      {
        title: "Unit 02: Vector Spaces",
        description: "YouTube search results for vector spaces.",
        url: "https://www.youtube.com/results?search_query=vector+spaces+explained"
      },
      {
        title: "Unit 02: Subspaces",
        description: "YouTube search results for subspaces in linear algebra.",
        url: "https://www.youtube.com/results?search_query=subspaces+linear+algebra+explained"
      },
      {
        title: "Unit 03: Linear Independence and Dependence",
        description: "YouTube search results for linear independence and dependence.",
        url: "https://www.youtube.com/results?search_query=linear+independence+and+dependence+explained"
      },
      {
        title: "Unit 03: Dimension of Vector Spaces",
        description: "YouTube search results for vector space dimension.",
        url: "https://www.youtube.com/results?search_query=dimension+of+vector+spaces+explained"
      },
      {
        title: "Unit 03: Rank of Matrices",
        description: "YouTube search results for rank of a matrix.",
        url: "https://www.youtube.com/results?search_query=rank+of+matrix+explained"
      },
      {
        title: "Unit 03: Basis of Vector Spaces",
        description: "YouTube search results for basis of a vector space.",
        url: "https://www.youtube.com/results?search_query=basis+of+vector+space+explained"
      },
      {
        title: "Unit 04: Linear Transformations",
        description: "YouTube search results for linear transformations.",
        url: "https://www.youtube.com/results?search_query=linear+transformations+explained"
      },
      {
        title: "Unit 04: Systems of Linear Equations",
        description: "YouTube search results for systems of linear equations.",
        url: "https://www.youtube.com/results?search_query=systems+of+linear+equations+explained"
      },
      {
        title: "Unit 05: Determinants",
        description: "YouTube search results for determinants of matrices.",
        url: "https://www.youtube.com/results?search_query=determinants+of+matrices+explained"
      },
      {
        title: "Unit 05: Diagonalization of Matrices",
        description: "YouTube search results for matrix diagonalization.",
        url: "https://www.youtube.com/results?search_query=diagonalization+of+matrices+explained"
      },
      {
        title: "Unit 06: Functions in Discrete Mathematics",
        description: "YouTube search results for discrete mathematics functions.",
        url: "https://www.youtube.com/results?search_query=functions+in+discrete+mathematics"
      },
      {
        title: "Unit 06: Relations in Discrete Mathematics",
        description: "YouTube search results for mathematical relations.",
        url: "https://www.youtube.com/results?search_query=relations+in+discrete+mathematics"
      },
      {
        title: "Unit 06: Set Theory",
        description: "YouTube search results for set theory explained.",
        url: "https://www.youtube.com/results?search_query=set+theory+explained"
      },
      {
        title: "Unit 07: Cardinality of Sets",
        description: "YouTube search results for cardinality of sets.",
        url: "https://www.youtube.com/results?search_query=cardinality+of+sets+explained"
      },
      {
        title: "Unit 07: Cartesian Product",
        description: "YouTube search results for Cartesian product of sets.",
        url: "https://www.youtube.com/results?search_query=cartesian+product+of+sets+explained"
      },
      {
        title: "Unit 07: Ordered Pairs",
        description: "YouTube search results for ordered pairs in mathematics.",
        url: "https://www.youtube.com/results?search_query=ordered+pairs+mathematics+explained"
      },
      {
        title: "Unit 07: Bijective Mappings",
        description: "YouTube search results for injective, surjective, and bijective functions.",
        url: "https://www.youtube.com/results?search_query=injective+surjective+bijective+functions+explained"
      },
      {
        title: "Unit 08: Equivalence Relations",
        description: "YouTube search results for equivalence relations with examples.",
        url: "https://www.youtube.com/results?search_query=equivalence+relations+explained+with+examples"
      },
      {
        title: "Unit 09: Logic Propositions",
        description: "YouTube search results for propositional logic.",
        url: "https://www.youtube.com/results?search_query=propositional+logic+explained"
      },
      {
        title: "Unit 09: Truth Tables",
        description: "YouTube search results for truth tables with examples.",
        url: "https://www.youtube.com/results?search_query=truth+tables+explained+with+examples"
      },
      {
        title: "Unit 10: Symbolic Statements",
        description: "YouTube search results for symbolic logic statements.",
        url: "https://www.youtube.com/results?search_query=symbolic+logic+statements+explained"
      },
      {
        title: "Unit 10: Conjunctive Normal Form (CNF)",
        description: "YouTube search results for Conjunctive Normal Form.",
        url: "https://www.youtube.com/results?search_query=conjunctive+normal+form+explained"
      },
      {
        title: "Unit 10: Disjunctive Normal Form (DNF)",
        description: "YouTube search results for Disjunctive Normal Form.",
        url: "https://www.youtube.com/results?search_query=disjunctive+normal+form+explained"
      },
      {
        title: "Unit 11: Karnaugh Maps",
        description: "YouTube search results for Karnaugh maps.",
        url: "https://www.youtube.com/results?search_query=karnaugh+maps+explained"
      },
      {
        title: "Unit 11: 2, 3 and 4 Variable Karnaugh Maps",
        description: "YouTube search results for 2, 3, and 4 variable K-map examples.",
        url: "https://www.youtube.com/results?search_query=2+3+4+variable+karnaugh+maps+examples"
      }
    ],
    papers: []
  },
  {
    code: "IS1109",
    name: "Statistics & Probability Theory",
    icon: "▥",
    notes: [
      {
        title: "01: Probability Diagrams",
        description: "Tree diagrams, Venn diagrams, and visualising probability spaces.",
        url: "assets/notes/IS1109/01_Probability_Diagrams.pdf"
      },
      {
        title: "02: Conditional Probability",
        description: "Dependent events, conditional probability rules, and independence.",
        url: "assets/notes/IS1109/02_Conditional_Probability.pdf"
      },
      {
        title: "03: Bayes' Theorem",
        description: "Prior and posterior probabilities using Bayes' theorem.",
        url: "assets/notes/IS1109/03_Bayes_Theorem.pdf"
      },
      {
        title: "04: Population and Sample",
        description: "Distinctions between populations, samples, and sampling concepts.",
        url: "assets/notes/IS1109/04_Population_and_Sample.pdf"
      },
      {
        title: "05: Random Variables",
        description: "Discrete and continuous random variables and probability distributions.",
        url: "assets/notes/IS1109/05_Random_Variables.pdf"
      },
      {
        title: "06: Data Collecting",
        description: "Methods and principles of statistical data collection.",
        url: "assets/notes/IS1109/06_Data_Collecting.pdf"
      },
      {
        title: "07: Data Summarizing",
        description: "Frequency tables and numerical summaries of datasets.",
        url: "assets/notes/IS1109/07_Data_Summarizing.pdf"
      },
      {
        title: "08: Data Visualizing",
        description: "Charts, histograms, box plots, and visual data presentation.",
        url: "assets/notes/IS1109/08_Data_Visualizing.pdf"
      },
      {
        title: "09: Central Tendency",
        description: "Measures of central tendency: mean, median, and mode.",
        url: "assets/notes/IS1109/09_Central_Tendency.pdf"
      },
      {
        title: "10: Dispersion",
        description: "Range, interquartile range, variance, and standard deviation.",
        url: "assets/notes/IS1109/10_Dispersion.pdf"
      },
      {
        title: "11: Mean and Variance of Random Variables",
        description: "Expected value, variance, and properties of random variables.",
        url: "assets/notes/IS1109/11_Mean_Variance_of_RVs.pdf"
      }
    ],
    slides: [],
    videos: [
      {
        title: "Statistics and Machine Learning in R (Playlist)",
        description: "StatQuest playlist covering statistics and foundational concepts.",
        url: "https://www.youtube.com/playlist?list=PLblh5JKOoLUJJpBNfk8_YadPwDTO2SCbx"
      },
      {
        title: "Statistics – A Full University Course on Data Science Basics",
        description: "Comprehensive course covering descriptive and inferential statistics.",
        url: "https://youtu.be/xxpc-HPKN28",
        thumbnail: "https://img.youtube.com/vi/xxpc-HPKN28/hqdefault.jpg"
      },
      {
        title: "Learn Probability Theory from Scratch | Full Course",
        description: "Complete foundational course on probability theory.",
        url: "https://youtu.be/ejA2rio1tRY",
        thumbnail: "https://img.youtube.com/vi/ejA2rio1tRY/hqdefault.jpg"
      }
    ],
    papers: []
  },
  {
    code: "IS1110",
    name: "Communication Skills I",
    icon: "✉",
    notes: [
      {
        title: "00: Full Notes (All Lessons)",
        description: "Compiled study notes covering all Communication Skills I lessons.",
        url: "assets/notes/IS1110/00_Full_Notes_All_Lessons.pdf"
      },
      {
        title: "01: Introduction to Communication",
        description: "The communication process, elements, and barriers.",
        url: "assets/notes/IS1110/01_Introduction_to_Communication.pdf"
      },
      {
        title: "02: Types of Communication",
        description: "Verbal, non-verbal, written, and visual communication.",
        url: "assets/notes/IS1110/02_Types_of_Communication.pdf"
      },
      {
        title: "03: Listening Skills",
        description: "Active listening techniques and overcoming listening barriers.",
        url: "assets/notes/IS1110/03_Listening_Skills.pdf"
      },
      {
        title: "04: Language for Communication",
        description: "Writing principles and effective language usage.",
        url: "assets/notes/IS1110/04_Language_for_Communication.pdf"
      },
      {
        title: "05: Communication in Organizations",
        description: "Organizational communication flows and workplace practices.",
        url: "assets/notes/IS1110/05_Communication_in_Organizations.pdf"
      },
      {
        title: "06: Communication Network",
        description: "Formal and informal communication networks.",
        url: "assets/notes/IS1110/06_Communication_Network.pdf"
      },
      {
        title: "07: Writing Business Letters",
        description: "Structure, tone, and formats for professional business letters.",
        url: "assets/notes/IS1110/07_Writing_Business_Letters.pdf"
      }
    ],
    slides: [],
    videos: [
      {
        title: "Model of Communication (FlatGrin)",
        description: "Illustrates the core communication process.",
        url: "https://www.youtube.com/watch?v=-HXa320iTPY",
        thumbnail: "https://img.youtube.com/vi/-HXa320iTPY/hqdefault.jpg"
      },
      {
        title: "10 Barriers to Effective Communication",
        description: "Common barriers that disrupt communication (Young Entrepreneurs Forum).",
        url: "https://www.youtube.com/watch?v=slq1nAhZuqE",
        thumbnail: "https://img.youtube.com/vi/slq1nAhZuqE/hqdefault.jpg"
      },
      {
        title: "Your Body Language Shapes Who You Are (Amy Cuddy)",
        description: "TED Talk on non-verbal communication and body language.",
        url: "https://www.youtube.com/watch?v=Ks-_Mh1QhMc",
        thumbnail: "https://img.youtube.com/vi/Ks-_Mh1QhMc/hqdefault.jpg"
      },
      {
        title: "Body Language of Confident People",
        description: "Practical tips on showing confidence through non-verbal cues.",
        url: "https://www.youtube.com/watch?v=EAHo2cA7-YU",
        thumbnail: "https://img.youtube.com/vi/EAHo2cA7-YU/hqdefault.jpg"
      },
      {
        title: "The Handshake as Non-Verbal Communication (Allan Pease)",
        description: "How handshakes convey meaning in non-verbal communication.",
        url: "https://www.youtube.com/watch?v=ZZZ7k8cMA-4",
        thumbnail: "https://img.youtube.com/vi/ZZZ7k8cMA-4/hqdefault.jpg"
      },
      {
        title: "4 Tips to Improve Active Listening Skills (Alex Lyon)",
        description: "Short 6-minute guide to stronger active listening.",
        url: "https://www.youtube.com/watch?v=7wUCyjiyXdg",
        thumbnail: "https://img.youtube.com/vi/7wUCyjiyXdg/hqdefault.jpg"
      },
      {
        title: "Active Listening: Improve Your Listening Skills",
        description: "Applying active listening in business relationships.",
        url: "https://www.youtube.com/watch?v=lL0sDXCzRu0",
        thumbnail: "https://img.youtube.com/vi/lL0sDXCzRu0/hqdefault.jpg"
      },
      {
        title: "The 7 Cs of Communication (MindToolsVideos)",
        description: "Overview of the 7 Cs for clear written and spoken communication.",
        url: "https://www.youtube.com/watch?v=sYBw9-8eCuM",
        thumbnail: "https://img.youtube.com/vi/sYBw9-8eCuM/hqdefault.jpg"
      },
      {
        title: "How to Write a Business Letter: The 8 Parts (Helen Wilkie)",
        description: "Breaking down the 8 standard parts of a business letter.",
        url: "https://www.youtube.com/watch?v=AxFs5zeRBn0",
        thumbnail: "https://img.youtube.com/vi/AxFs5zeRBn0/hqdefault.jpg"
      },
      {
        title: "BUS210: Memorandums and Business Letters (Saylor Academy)",
        description: "Writing effective memos and professional business letters.",
        url: "https://www.youtube.com/watch?v=B3ViH4v57QE",
        thumbnail: "https://img.youtube.com/vi/B3ViH4v57QE/hqdefault.jpg"
      },
      {
        title: "The Key Forms of Business Writing: Basic Letter",
        description: "Fundamentals of formatting a basic business letter (UpWritePress).",
        url: "https://www.youtube.com/watch?v=I2txr6OY5dY",
        thumbnail: "https://img.youtube.com/vi/I2txr6OY5dY/hqdefault.jpg"
      }
    ],
    papers: []
  },
  {
    code: "IS1111",
    name: "Academic Integrity & Skillery",
    icon: "✓",
    notes: [
      {
        title: "Unit 1: Introduction to Academic Integrity",
        description: "Study notes introducing academic integrity principles.",
        url: "assets/notes/IS1111/IS1111_Unit1_Introduction_to_Academic_Integrity.pdf"
      },
      {
        title: "Unit 2: Academic Integrity Policies",
        description: "Study notes on institutional policies and academic misconduct.",
        url: "assets/notes/IS1111/IS1111_Unit2_Academic_Integrity_Policies.pdf"
      },
      {
        title: "Unit 3: Plagiarism, Collusion and Contract Cheating",
        description: "Study notes distinguishing plagiarism, collusion, and contract cheating.",
        url: "assets/notes/IS1111/IS1111_Unit3_Plagiarism_Collusion_and_Contract_Cheating.pdf"
      },
      {
        title: "Unit 4: Putting Academic Integrity into Practice",
        description: "Study notes on applying academic integrity in coursework.",
        url: "assets/notes/IS1111/IS1111_Unit4_Putting_Academic_Integrity_into_Practice.pdf"
      },
      {
        title: "Unit 5: Research Ethics",
        description: "Study notes on ethical principles in academic research.",
        url: "assets/notes/IS1111/IS1111_Unit5_Research_Ethics.pdf"
      },
      {
        title: "Unit 6: Citing and Referencing",
        description: "Study notes on citation standards and referencing styles.",
        url: "assets/notes/IS1111/IS1111_Unit6_Citing_and_Referencing.pdf"
      },
      {
        title: "Unit 7: Reading and Note-making",
        description: "Study notes on effective academic reading and note-taking methods.",
        url: "assets/notes/IS1111/IS1111_Unit7_Reading_and_Note_making.pdf"
      },
      {
        title: "Unit 8: Critical Thinking",
        description: "Study notes on analytical evaluation and critical thinking.",
        url: "assets/notes/IS1111/IS1111_Unit8_Critical_Thinking.pdf"
      },
      {
        title: "Unit 1 Guide: Georgian College Tutorial",
        description: "Interactive academic integrity tutorial.",
        url: "https://library.georgiancollege.ca/academic_integrity/tutorial"
      },
      {
        title: "Unit 1 Guide: University of Edinburgh – Academic Integrity",
        description: "Open study guide on academic integrity.",
        url: "https://open.ed.ac.uk/academic-integrity-2/"
      },
      {
        title: "Unit 1 Guide: UBC – Introduction to Academic Integrity",
        description: "Overview guide for university students.",
        url: "https://www.grad.ubc.ca/current-students/professional-development/20157-academic-integrity-introduction"
      },
      {
        title: "Unit 2 Guide: Victoria University of Wellington – Academic Misconduct",
        description: "Understanding academic misconduct and policy expectations.",
        url: "https://www.wgtn.ac.nz/students/support/student-interest-and-conflict-resolution/academic-integrity/understanding-academic-misconduct"
      },
      {
        title: "Unit 2 Guide: York University – Types of Academic Misconduct",
        description: "SPARK guide detailing types of academic misconduct.",
        url: "https://spark.library.yorku.ca/?p=7700"
      },
      {
        title: "Unit 3 Guide: KPU – Understanding Plagiarism",
        description: "Open textbook chapter on understanding and avoiding plagiarism.",
        url: "https://kpu.pressbooks.pub/academicintegrity/part/understandingplagiarism/"
      },
      {
        title: "Unit 3 Guide: Univ. of Sydney – Contract Cheating",
        description: "What students need to know about contract cheating.",
        url: "https://www.sydney.edu.au/study/student-life/student-news/2018/10/08/what-you-need-to-know-about-contract-cheating.html"
      },
      {
        title: "Unit 3 Guide: Univ. of Aberdeen – Contract Cheating",
        description: "Academic integrity guidance on contract cheating.",
        url: "https://www.abdn.ac.uk/staffnet/education/assessment/academic-integrity/contract-cheating/"
      },
      {
        title: "Unit 4 Guide: Teaching & Learning Ireland – Academic Integrity Lesson",
        description: "Practical academic integrity lesson for learners.",
        url: "https://hub.teachingandlearning.ie/resource/academic-integrity-lesson-for-learners/"
      },
      {
        title: "Unit 4 Guide: KPU Academic Integrity Open Textbook",
        description: "Full open textbook on academic integrity.",
        url: "https://kpu.pressbooks.pub/academicintegrity/"
      },
      {
        title: "Unit 5 Guide: NCRM – Research Ethics, Theory and Practice",
        description: "National Centre for Research Methods online resource.",
        url: "https://www.ncrm.ac.uk/resources/online/all/?id=20591"
      },
      {
        title: "Unit 6 Guide: UCD Harvard Referencing Tutorial",
        description: "Interactive Harvard style referencing tutorial.",
        url: "https://libguides.ucd.ie/harvardstyle/harvardtutorial"
      },
      {
        title: "Unit 6 Guide: Edinburgh College Harvard Quick Guide (PDF)",
        description: "Downloadable quick reference PDF for Harvard referencing.",
        url: "https://library.edinburghcollege.ac.uk/wp-content/uploads/2023/05/Harvard-Referencing-Quick-Guide-1.pdf"
      },
      {
        title: "Unit 7 Guide: Portland CC – Note-Taking Methods",
        description: "Overview of effective study note-taking strategies.",
        url: "https://www.pcc.edu/online/knowledge-nook/study-skills/note-taking-methods/"
      },
      {
        title: "Unit 7 Guide: Portland State – Reading and Notetaking",
        description: "Academic support guide on reading and note-taking.",
        url: "https://www.pdx.edu/student-academic-support-services/reading-and-notetaking"
      },
      {
        title: "Unit 7 Guide: Open Culture – The Cornell Note-Taking System",
        description: "Guide to using the Cornell note-taking method.",
        url: "https://www.openculture.com/2018/10/the-cornell-note-taking-system.html"
      },
      {
        title: "Unit 8 Guide: Trinity College Dublin – What is Critical Thinking?",
        description: "Study skills resource on critical thinking.",
        url: "https://tcd.ie/Student_Counselling/student-learning/learning-resources/study-skills/critical-thinking/index.php"
      },
      {
        title: "Unit 8 Guide: UTS – Critical Thinking",
        description: "University of Technology Sydney critical thinking study guide.",
        url: "https://www.uts.edu.au/current-students/current-students-information-uts-business-school/study-and-assessment-resources/critical-thinking"
      },
      {
        title: "Unit 8 Guide: UBC Learning Commons – Thinking Critically",
        description: "Strategies and resources for developing critical thinking.",
        url: "https://learningcommons.ubc.ca/?p=3319"
      }
    ],
    slides: [],
    videos: [
      {
        title: "Unit 1: Penn State Academic Integrity Training Videos",
        description: "Video series on academic integrity for university students.",
        url: "https://integrity.psu.edu/videos-for-university-community"
      },
      {
        title: "Unit 1: Turnitin – Honor Code and Academic Integrity",
        description: "Video discussing honor codes and academic integrity guidelines.",
        url: "https://turnitin.co.uk/videos/the-honor-code-guidelines-for-academic-integrity"
      },
      {
        title: "Unit 5 (YT): Social Research Ethics – Basic Concepts",
        description: "YouTube video introducing foundational concepts of research ethics.",
        url: "https://youtu.be/3K1QnIiXXyM",
        thumbnail: "https://img.youtube.com/vi/3K1QnIiXXyM/hqdefault.jpg"
      },
      {
        title: "Unit 5 (YT): What Can You Do to Be a Responsible and Ethical Researcher?",
        description: "YouTube video on responsible and ethical research practices.",
        url: "https://youtu.be/ewI6B0fNYAs",
        thumbnail: "https://img.youtube.com/vi/ewI6B0fNYAs/hqdefault.jpg"
      },
      {
        title: "Unit 5: Editage – Researching Ethically",
        description: "Video resource on what researchers should know to conduct ethical research.",
        url: "https://www.editage.com/insights/what-every-researcher-should-know-to-conduct-research-ethically"
      },
      {
        title: "Unit 6: Cite Them Right – Video Introduction",
        description: "Video introduction to citing and referencing properly.",
        url: "https://citethemrightonline.com/video-introduction"
      },
      {
        title: "Unit 7: Crash Course Study Skills #1 – Taking Notes",
        description: "Video lesson on effective note-taking strategies.",
        url: "https://rosetta.to/u/crashcourse/taking-notes-crash-course-study-skills-1"
      }
    ],
    papers: []
  },
  {
    code: "IS-EGP-1101",
    name: "General English I",
    icon: "A",
    notes: [
      {
        title: "General English I Study Notes",
        description: "Comprehensive study notes for General English I.",
        url: "assets/notes/IS-EGP-1101/General_English_Study_Notes.pdf"
      }
    ],
    slides: [],
    videos: [],
    papers: []
  }
];

const resourceCategories = [
  { key: "notes", title: "Lecture Notes", description: "Review key concepts at your own pace.", kind: "Lecture notes" },
  { key: "slides", title: "Lecture Slides", description: "Browse practical lessons and presentations.", kind: "Lecture slides" },
  { key: "videos", title: "YouTube Tutorials", description: "Watch lessons and strengthen your understanding.", kind: "YouTube tutorials" },
  { key: "papers", title: "Past Papers", description: "Practice with papers and sample questions.", kind: "Past papers" }
];

const homeView = document.getElementById("homeView");
const detailView = document.getElementById("detailView");
const subjectGrid = document.getElementById("subjectGrid");
const searchInput = document.getElementById("subjectSearch");
const subjectCount = document.getElementById("subjectCount");
const emptyState = document.getElementById("emptyState");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

// Draw each subject as a keyboard-accessible card.
function showSubjects(list) {
  subjectGrid.innerHTML = list.map((subject) => `
    <article class="subject-card" tabindex="0" role="button" data-code="${subject.code}" aria-label="Open ${subject.code}: ${subject.name}">
      <span class="subject-icon" aria-hidden="true">${subject.icon}</span>
      <div class="subject-code">${subject.code}</div>
      <h3>${subject.name}</h3>
      <span class="card-arrow" aria-hidden="true">→</span>
    </article>
  `).join("");
  subjectCount.textContent = list.length;
  emptyState.hidden = list.length !== 0;
}

// Show a list of resource links, or a clear message while none are available.
function resourceList(items, kind) {
  if (!items || items.length === 0) {
    return `<p class="resource-empty">${kind} will appear here when they are provided.</p>`;
  }
  return items.map((item) => {
    const isExternalWebPage = item.url && /^https?:\/\//i.test(item.url) && !/\.pdf(\?|$)/i.test(item.url);
    const isZip = item.url && /\.zip$/i.test(item.url);

    return `
      <div class="resource-item">
        ${item.thumbnail ? `<img class="resource-thumbnail" src="${item.thumbnail}" alt="" loading="lazy">` : `<span aria-hidden="true">${kind === "YouTube tutorials" ? "▷" : "▤"}</span>`}
        <div><strong>${item.title}</strong><small>${item.description || "Learning resource"}</small></div>
        ${item.url && !isZip ? `<a class="resource-action" href="${item.url}" ${kind === "YouTube tutorials" || isExternalWebPage ? 'target="_blank" rel="noopener noreferrer"' : 'target="_blank" rel="noopener"'}>${kind === "YouTube tutorials" ? "Watch ↗" : "View ↗"}</a>` : !item.url ? `<span class="resource-action disabled">Link unavailable</span>` : ""}
        ${kind === "Lecture notes" && item.url && !isExternalWebPage ? `<a class="resource-action" href="${item.url}" download>Download ↓</a>` : ""}
      </div>
    `;
  }).join("");
}

function resourceSections(subject, featured) {
  return resourceCategories.map((category, index) => {
    const heading = featured
      ? `<div class="panel-heading"><span class="panel-number">${String(index + 1).padStart(2, "0")}</span><div><h2>${category.title === "Lecture Notes" ? "Study Notes" : category.title}</h2><p>${category.description}</p></div></div>`
      : `<h2>${category.title}</h2>`;
    return `<section class="resource-card">${heading}${resourceList(subject[category.key], category.kind)}</section>`;
  }).join("");
}

function openSubject(code) {
  const subject = subjects.find((item) => item.code === code);
  if (!subject) return;
  homeView.hidden = true;
  detailView.hidden = false;
  const isFeatured = subject.code === "IS1106";
  const hero = isFeatured ? `
    <section class="web-hero" aria-labelledby="webSubjectTitle">
      <div class="web-hero-copy">
        <div class="subject-code">${subject.code}</div>
        <h1 id="webSubjectTitle">${subject.name}</h1>
        <p>Learning resources for your first semester.</p>
      </div>
      <div class="code-illustration" role="img" aria-label="Laptop displaying code with HTML, CSS, and JavaScript symbols">
        <span class="code-badge badge-html">&lt;/&gt; <b>HTML</b></span>
        <span class="code-badge badge-css"># <b>CSS</b></span>
        <span class="code-badge badge-js">JS <b>JavaScript</b></span>
        <div class="laptop-screen"><div class="screen-bar"><i></i><i></i><i></i><span>learnhub.html</span></div><div class="code-lines"><b>&lt;html&gt;</b><span>&nbsp; &lt;body&gt;</span><em>&nbsp;&nbsp; Learn something new</em><span>&nbsp; &lt;/body&gt;</span><b>&lt;/html&gt;</b></div></div>
        <div class="laptop-base"></div>
      </div>
    </section>
  ` : `
    <header class="detail-heading"><div class="subject-code">${subject.code}</div><h1>${subject.name}</h1><p>Learning resources for your first semester</p></header>
  `;
  detailView.innerHTML = `
    <button class="back-button" id="backToSubjects">← &nbsp; Back to Subjects</button>
    ${hero}
    <div class="resource-grid${isFeatured ? " is1106-resources" : ""}">
      ${resourceSections(subject, isFeatured)}
    </div>
    ${isFeatured ? "" : '<p class="detail-note">Resource links will be added when verified materials are available.</p>'}
  `;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function goHome(target) {
  detailView.hidden = true;
  homeView.hidden = false;
  if (target) document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  else window.scrollTo({ top: 0, behavior: "smooth" });
}

showSubjects(subjects);
document.getElementById("year").textContent = new Date().getFullYear();

searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  const matches = subjects.filter((subject) => `${subject.code} ${subject.name}`.toLowerCase().includes(query));
  showSubjects(matches);
});

subjectGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".subject-card");
  if (card) openSubject(card.dataset.code);
});
subjectGrid.addEventListener("keydown", (event) => {
  const card = event.target.closest(".subject-card");
  if (card && (event.key === "Enter" || event.key === " ")) {
    event.preventDefault();
    openSubject(card.dataset.code);
  }
});

document.addEventListener("click", (event) => {
  const scrollButton = event.target.closest("[data-scroll]");
  if (scrollButton) {
    event.preventDefault();
    goHome(scrollButton.dataset.scroll);
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
  if (event.target.closest("[data-home-link]")) {
    event.preventDefault();
    goHome();
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  }
  if (event.target.closest("#backToSubjects")) goHome("subjects");
});

menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Expand or collapse FAQ answers on the homepage.
document.querySelectorAll(".faq-question").forEach((button) => {
  button.addEventListener("click", () => {
    const answer = button.closest(".faq-item").querySelector(".faq-answer");
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    answer.hidden = isExpanded;
  });
});

// The keyboard shortcut helps users jump straight to subject search.
document.addEventListener("keydown", (event) => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    goHome("subjects");
    searchInput.focus();
  }
});