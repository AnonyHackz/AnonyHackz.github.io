 

function en(){
        
        var en= document.createElement("div");            // To create element
        

        en.setAttribute('id','Entry');                  // To set id or class name to the created element
        
                                                        // To append html codes into created element
        en.innerHTML+=     '<div id="topics">\
                                <form>\
                                <tr><td><th><center><h3 color="red"> Cloud Computing Syllabus</h3></th></center></td> </tr>\
                                <tr>\
                                    <td>\
                                        <ol>\
                                            <li id="1" onclick="Syllabus()" >Syllabus</li>\
                                            <li id="2" onclick="Introduction()">Cloud Computing Introduction</li>\
                                            <li id="3" onclick="Advantages_and_Disadvantages()">Advantages and Disadvantages</li>\
                                            <li id="4" onclick="History()">History of Cloud Computing</li>\
                                            <li id="5" onclick="Architecture()">Cloud Computing Architecture</li>\
                                            <li id="6" onclick="Technologies()">Cloud Computing Technologies</li>\
                                            <li id="7" onclick="Cloud_vs_Grid()">Cloud Computing VS Grid Computing</li>\
                                            <li id="8" onclick="Cloud_Computing_Works()">How Dose Cloud Computing Works</li>\
                                            <li id="9" onclick="Applications()">Cloud Computing Applications</li>\
                                            <li id="10" onclick="Security_And_Risk()">Security and Risk of Cloud Computing</li>\
                                            <li id="11" onclick="AWS()">AWS</li>\
                                            <li id="12" onclick="AWS_Architecture()">AWS Architecture</li>\
                                            <li id="13" onclick="AWS_Features()">AWS Features</li>\
                                            <li id="14" onclick="AWS_Pros_And_Cons()">AWS Pros & Cons</li>\
                                            <li id="15" onclick="AWS_Application()">AWS Application</li>\
                                            <li id="16" onclick="AWS_Console_Mobile_App()">AWS Console Mobile App</li>\
                                            <li id="17" onclick="AWS_Account()">AWS Account</li>\
                                            <li id="18" onclick="AWS_Management_Console()">AWS Management Console</li>\
                                            <li id="19" onclick="AWS_Developer_Tools()">AWS Developer Tools</li>\
                                            <li id="20" onclick="AWS_Management_Tools()">AWS Management Tools</li>\
                                        </ol>\
                                    </td>\
                                </tr>\
                            </form>\
                        </div>\
                        <div id="content" style=" display:inline-block;" >\
                                <img id="intIMG" src="../../../Cloud Computing/medias/IMG/Entry.png" alter="logo" style="margin-top:7%;width:50%; height:120%;">\
                                <video id="intVideo" autoplay controls loop style="margin-top:8%;width:47%; height:95%; padding-left:2%;">\
                                        <source src="../../../Cloud Computing/medias/Videos/Animations/CC1.mp4" type="video/mp4">\
                                </video>\
                        </div>'

        var bottmBID= document.createElement("div");            // To create element
        

        bottmBID.setAttribute('id','BID');                  // To set id or class name to the created element
        
                                                        // To append html codes into created element
        bottmBID.innerHTML+=    '<center>\
                                        <center><img id="BIcon" src="../../../Common/Media/Logo/logo-white.png">\
                                        <h1 id="Bhd"> Anony Hackz </h1> </center>\
                                        <center><span style=" color: aliceblue;">Contact Us If You Need Help</span></center>\
                                        <center><p id="BContact">+971503118352, +919047891106, vijayveerappa741@gmail.com</p></center>\
                                </center>'      
                                 
                      
                                
                     



        var con = document.getElementById("container");    // To append created element into html file
        con.appendChild(en);                 
        con.removeChild(int);    // To remove elements
        document.getElementById("Entry").insertAdjacentElement("afterend", bottmBID);       
                
 }


function Syllabus(){


        var con = document.getElementById("container");    // To append created element into html file
        var Entry= document.getElementById("Entry");               
        con.removeChild(Entry);

        var en= document.createElement("div");            // To create element

        en.setAttribute('id','Entry');                  // To set id or class name to the created element
                                                        // To append html codes into created element
        en.innerHTML+=     '<div id="topics">\
                                <form>\
                                <tr><th><center><h3> Cloud Computing Syllabus</h3></th></center> </tr>\
                                <tr>\
                                    <td>\
                                        <ol>\
                                            <li id="1" style="color: yellow;" >Syllabus</li>\
                                            <li id="2" onclick="Introduction()">Cloud Computing Introduction</li>\
                                            <li id="3" onclick="Advantages_and_Disadvantages()">Advantages and Disadvantages</li>\
                                            <li id="4" onclick="History()">History of Cloud Computing</li>\
                                            <li id="5" onclick="Architecture()">Cloud Computing Architecture</li>\
                                            <li id="6" onclick="Technologies()">Cloud Computing Technologies</li>\
                                            <li id="7" onclick="Cloud_vs_Grid()">Cloud Computing VS Grid Computing</li>\
                                            <li id="8" onclick="Cloud_Computing_Works()">How Dose Cloud Computing Works</li>\
                                            <li id="9" onclick="Applications()">Cloud Computing Applications</li>\
                                            <li id="10" onclick="Security_And_Risk()">Security and Risk of Cloud Computing</li>\
                                            <li id="11" onclick="AWS()">AWS</li>\
                                            <li id="12" onclick="AWS_Architecture()">AWS Architecture</li>\
                                            <li id="13" onclick="AWS_Features()">AWS Features</li>\
                                            <li id="14" onclick="AWS_Pros_And_Cons()">AWS Pros & Cons</li>\
                                            <li id="15" onclick="AWS_Application()">AWS Application</li>\
                                            <li id="16" onclick="AWS_Console_Mobile_App()">AWS Console Mobile App</li>\
                                            <li id="17" onclick="AWS_Account()">AWS Account</li>\
                                            <li id="18" onclick="AWS_Management_Console()">AWS Management Console</li>\
                                            <li id="19" onclick="AWS_Developer_Tools()">AWS Developer Tools</li>\
                                            <li id="20" onclick="AWS_Management_Tools()">AWS Management Tools</li>\
                                        </ol>\
                                    </td>\
                                </tr>\
                            </form>\
                        </div>\
                        <div id="content"></div>'



        document.getElementById("BID").insertAdjacentElement("beforebegin",en); 
        var content=document.getElementById("content");
        
        var pro= document.createElement("div");            // To create element
        

        pro.setAttribute('id','page');                  // To set id or class name to the created element
                                               
        pro.innerHTML+='<form>\
                                <table>\
                                        <tr>\
                                                <h1>Syllabus to be covered in Cloud Computing Course</h1>\
                                                <h2>Cloud Computing Introduction:-</h2>\
                                                        <p>Client Side History - Server Side History - Why cloud computing - Why Cloud computing in IOT -\
                                                        Cloud Computing Types - Advantages and Disadvantages of Cloud Computing - Cloud Computing Uses -\
                                                        Cloud Computing Tech wise History Cloud Computing Introduction, Advantages and Disadvantages of\
                                                        Cloud Computing, History of Cloud Computing, Web hosting Vs Cloud Hosting</p>\
                                                <h2> History of the Cloud Computing:-</h2>\
                                                        <p>Why the word Cloud Computing - Whats there in the Cloud - Cloud Computing vs Cost - Cloud\
                                                        Computing Types - Cloud Computing Benefits - Cloud Computing Classification - Private Cloud vs Public\
                                                        Cloud - What is Private Cloud - What is Public Cloud - What is Hybrid Cloud-Cloud in the real time world -\
                                                        PAAS vs IAAS vs SAAS- On-premise Infrastructure vs Infrastructure as a service - Top Cloud providers -\
                                                        AWS Intro - What is Web Service?-How Web Service works? - Real time web service examples – Web\
                                                        services Vs REST API - AWS Services Intro - How to create account and access account in cloud server</p>\
                                                <h2> AWS:-</h2>\
                                                        <p> AWS Overview - Why AWS - AWS Services - Storage based services - Static Website Hosting\
                                                        based services - Dynamic Website Hosting based services – Relational databases - NoSQL Databases -\
                                                        Network Creation based services - AWS Resource manage services</p>\
                                                <h2>AWS Storage & CDN Services:-</h2>\
                                                        <p>  AWS Storage and CDN - Aws S3 bucket - Elastic Block Store - Amazon cloud front - AWS Glacier -\
                                                        AWS Storage Gateway - AWS Import Export</p>\
                                                <h2>Networking Services:-</h2>\
                                                        <p> Auto Scaling-Elastic Load Balancing - Amazon WorkSpace - Amazon virtual private cloud\
                                                        amazon vpc) - AWS Route 53 - Amazon Direct Connect - Computation Services - AWS EC2</p>\
                                                <h2> AWS Database:-</h2>\
                                                        <p> What is NoSQL Database - What is JSON - Dynamodb - AWS Nosql Database – AWS ElastiCache\
                                                        - What is Relational Database - AWS RDS - Amazon Redshift – Amazon Snowball / Amazon Migration\
                                                        services - rds proxy - Rds Mirroring and replication</p>\
                                                <h2>AWS AppServices:-</h2>\
                                                        <p> AWS cloudSearch - aws Elastic Transcoder - Amazon email sending services - AWS SES - AWS\
                                                        SNS - Push notification services - AWS SQS - Message Queue Service – AWS SWF Workflow Service -\
                                                        AWS AppStream</p>\
                                                <h2>AWS Deployment and Management:-</h2>\
                                                        <p> AWS CloudFormation - AWS CloudWatch - AWS Elastic Beanstalk - AWS IAM - AWS Cloud Trail -\
                                                        AWS OpsWorks - AWS CloudHSM</p>\
                                        </td>\
                                </table>\
                        </form>';
        var con = document.getElementById("content");    // To append created element into html file
        con.appendChild(pro);

        
      }


function Introduction(){
        var con = document.getElementById("container");    // To append created element into html file
        var Entry= document.getElementById("Entry");               
        con.removeChild(Entry);

        var en= document.createElement("div");            // To create element

        en.setAttribute('id','Entry');                  // To set id or class name to the created element
                                                        // To append html codes into created element
        en.innerHTML+=     '<div id="topics">\
                                <form>\
                                <tr><th><center><h3> Cloud Computing Syllabus</h3></th></center> </tr>\
                                <tr>\
                                    <td>\
                                        <ol>\
                                            <li id="1" onclick="Syllabus()" >Syllabus</li>\
                                            <li id="2" style="color: yellow;" >Cloud Computing Introduction</li>\
                                            <li id="3" onclick="Advantages_and_Disadvantages()">Advantages and Disadvantages</li>\
                                            <li id="4" onclick="History()">History of Cloud Computing</li>\
                                            <li id="5" onclick="Architecture()">Cloud Computing Architecture</li>\
                                            <li id="6" onclick="Technologies()">Cloud Computing Technologies</li>\
                                            <li id="7" onclick="Cloud_vs_Grid()">Cloud Computing VS Grid Computing</li>\
                                            <li id="8" onclick="Cloud_Computing_Works()">How Dose Cloud Computing Works</li>\
                                            <li id="9" onclick="Applications()">Cloud Computing Applications</li>\
                                            <li id="10" onclick="Security_And_Risk()">Security and Risk of Cloud Computing</li>\
                                            <li id="11" onclick="AWS()">AWS</li>\
                                            <li id="12" onclick="AWS_Architecture()">AWS Architecture</li>\
                                            <li id="13" onclick="AWS_Features()">AWS Features</li>\
                                            <li id="14" onclick="AWS_Pros_And_Cons()">AWS Pros & Cons</li>\
                                            <li id="15" onclick="AWS_Application()">AWS Application</li>\
                                            <li id="16" onclick="AWS_Console_Mobile_App()">AWS Console Mobile App</li>\
                                            <li id="17" onclick="AWS_Account()">AWS Account</li>\
                                            <li id="18" onclick="AWS_Management_Console()">AWS Management Console</li>\
                                            <li id="19" onclick="AWS_Developer_Tools()">AWS Developer Tools</li>\
                                            <li id="20" onclick="AWS_Management_Tools()">AWS Management Tools</li>\
                                        </ol>\
                                    </td>\
                                </tr>\
                            </form>\
                        </div>\
                        <div id="content"></div>'



        document.getElementById("BID").insertAdjacentElement("beforebegin",en); 
        var content=document.getElementById("content");
        
        var pro= document.createElement("div");            // To create element
        

        pro.setAttribute('id','page');                  // To set id or class name to the created element
                                               
        pro.innerHTML+='<form>\
                                <table>\
                                        <tr>\
                                                <center><h1>Cloud Computing Introduction</h1></center>\
                                                <h2>Introduction</h2>\
                                                        <p>  Cloud computing is a virtualization-based technology that allows us to create,\
                                                        configure, and customize applications via an internet connection. The cloud technology\
                                                        includes a development platform, hard disk, software application, and database.</p>\
                                                <h2>What is Cloud Computing:-</h2>\
                                                        <p>  The term cloud refers to a network or the internet. It is a technology that uses remote\
                                                        servers on the internet to store, manage, and access data online rather than local drives. The\
                                                        data can be anything such as files, images, documents, audio, video, and more.Cloud\
                                                        computing is the delivery of on-demand computing services -- from applications to storage and\
                                                        processing power -- typically over the internet and on a pay-as-you-go basis.Cloud Computing\
                                                        is often far more secure than traditional computing, because companies like Google and\
                                                        Amazon can attract and retain cyber-security personnel of a higher quality than many\
                                                        governmental agencies.</p>\
                                                        <img src="../../../Cloud Computing/medias/IMG/1.png" alter="logo" style="padding-left:3%;">\
                                                        <h4>There are the following operations that we can do using cloud computing:</h4>\
                                                        <p>  ●   Developing new applications and services</p>\
                                                        <p>  ●   Storage, back up, and recovery of data</p>\
                                                        <p>  ●   Hosting blogs and websites</p>\
                                                        <p>  ●   Delivery of software on demand</p>\
                                                        <p>  ●   Analysis of data</p>\
                                                        <p>  ●   Streaming videos and audios</p>\
                                                <h2>Why Cloud Computing?:-</h2>\
                                                <p>Small as well as large IT companies, follow the traditional methods to provide the IT\
                                                        infrastructure. That means for any IT company, we need a Server Room that is the basic\
                                                        need of IT companies.</p>\
                                                        <p>A fundamental concept behind cloud computing is that the location of the service, and\
                                                        many of the details such as the hardware or operating system on which it is running, are largely\
                                                        irrelevant to the user.</p>\
                                                        <p>It is with this in mind that the metaphor of the cloud was borrowed from old telecoms\
                                                        network schematics, in which the public telephone network (and later the internet) was often\
                                                        represented as a cloud to denote that the just did not matter -- it was just a cloud of stuff. This is\
                                                        an over-simplification of course; for many customers location of their services and data\
                                                        remains a key issue.</p>\
                                                        <p>In that server room, there should be a database server, mail server, networking,\
                                                        firewalls, routers, modem, switches, QPS (Query Per Second means how much queries or load\
                                                        will be handled by the server), configurable system, high net speed, and the maintenance\
                                                        engineers.</p>\
                                                        <p>To establish such IT infrastructure, we need to spend lots of money. To overcome all\
                                                        these problems and to reduce the IT infrastructure cost, Cloud Computing comes into\
                                                        existence.</p>\
                                                        <center><img src="../../../Cloud Computing/medias/IMG/2.png" alter="logo" style="width:100%; height:100%;"></center>\
                                                <center><h1>Characteristics of Cloud Computing</h1></center>\
                                                <h2> The characteristics of cloud computing are given below:</h2>\
                                                        <h3>1) Agility:-</h3>\
                                                        <p> ● The cloud works in a distributed computing environment. It shares resources among\
                                                                        users and works very fast. Cloud Agility means rapid provisioning of computer\
                                                                        resources using cloud computing. I always believe the two major purposes of cloud\
                                                                        computing are: it helps you get started immediately, and you can pay only for what you\
                                                                        use</p>\
                                                        <h3>2) High availability and reliability:-</h3>\
                                                        <p>● The availability of servers is high and more reliable because the chances of\
                                                                infrastructure failure are minimum.</p>\
                                                        <h3>3) High Scalability:-</h3>\
                                                        <p>● Cloud offers "on-demand" provisioning of resources on a large scale, without having\
                                                                engineers for peak loads.</p>\
                                                        <h3>4) Multi-Sharing:-</h3>\
                                                        <p>● With the help of cloud computing, multiple users and applications can work more</p>\
                                                        <p>● efficiently with cost reductions by sharing common infrastructure.</p>\
                                                        <h3>5) Device and Location Independence:-</h3>\
                                                        <p>● Cloud computing enables the users to access systems using a web browser regardless\
                                                                of their location or what device they use e.g. PC, mobile phone, etc. As infrastructure is\
                                                                off-site (typically provided by a third-party) and accessed via the Internet, users can\
                                                                connect from anywhere.</p>\
                                                        <h3> 6) Maintenance:-</h3>\
                                                        <p>● Maintenance of cloud computing applications is easier, since they do not need to be\
                                                                installed on each users computer and can be accessed from different places. So, it\
                                                                reduces the cost also.</p>\
                                                        <h3>7) Low Cost:-</h3>\
                                                        <p>● By using cloud computing, the cost will be reduced because to take the services of\
                                                                cloud computing, IT company need not to set its own infrastructure and pay-as-per\
                                                                usage of resources.</p>\
                                                        <h3>8) Services in the pay-per-use mode:-</h3>\
                                                        <p>● Application Programming Interfaces (APIs) are provided to the users so that they can\
                                                                access services on the cloud by using these APIs and pay the charges as per the\
                                                                usage of services.</p>\
                                                        <h3>9) Rapid Elasticity:-</h3>\
                                                        <p>● Capabilities can be elastically provisioned and released, in some cases automatically,\
                                                                to scale rapidly outward and inward commensurate with demand. To the consumer, the\
                                                                capabilities available for provisioning often appear to be unlimited and can be appropriated in\
                                                                any quantity at any time.</p>\
                                                        <h3>10)On-Demand Self-Service:-</h3>\
                                                        <p>● A consumer can unilaterally provision computing capabilities, such as server time and\
                                                                network storage, as needed automatically without requiring human interaction with each\
                                                                service provider. </p>\
                                        </td>\
                                </table>\
                        </form>';
        var con = document.getElementById("content");    // To append created element into html file
        con.appendChild(pro);

           
}

function Advantages_and_Disadvantages(){
        var con = document.getElementById("container");    // To append created element into html file
        var Entry= document.getElementById("Entry");               
        con.removeChild(Entry);

        var en= document.createElement("div");            // To create element

        en.setAttribute('id','Entry');                  // To set id or class name to the created element
                                                        // To append html codes into created element
        en.innerHTML+=     '<div id="topics">\
                                <form>\
                                <tr><th><center><h3> Cloud Computing Syllabus</h3></th></center> </tr>\
                                <tr>\
                                    <td>\
                                        <ol>\
                                            <li id="1" onclick="Syllabus()" >Syllabus</li>\
                                            <li id="2" onclick="Introduction()" >Cloud Computing Introduction</li>\
                                            <li id="3" style="color:yellow;">Advantages and Disadvantages</li>\
                                            <li id="4" onclick="History()">History of Cloud Computing</li>\
                                            <li id="5" onclick="Architecture()">Cloud Computing Architecture</li>\
                                            <li id="6" onclick="Technologies()">Cloud Computing Technologies</li>\
                                            <li id="7" onclick="Cloud_vs_Grid()">Cloud Computing VS Grid Computing</li>\
                                            <li id="8" onclick="Cloud_Computing_Works()">How Dose Cloud Computing Works</li>\
                                            <li id="9" onclick="Applications()">Cloud Computing Applications</li>\
                                            <li id="10" onclick="Security_And_Risk()">Security and Risk of Cloud Computing</li>\
                                            <li id="11" onclick="AWS()">AWS</li>\
                                            <li id="12" onclick="AWS_Architecture()">AWS Architecture</li>\
                                            <li id="13" onclick="AWS_Features()">AWS Features</li>\
                                            <li id="14" onclick="AWS_Pros_And_Cons()">AWS Pros & Cons</li>\
                                            <li id="15" onclick="AWS_Application()">AWS Application</li>\
                                            <li id="16" onclick="AWS_Console_Mobile_App()">AWS Console Mobile App</li>\
                                            <li id="17" onclick="AWS_Account()">AWS Account</li>\
                                            <li id="18" onclick="AWS_Management_Console()">AWS Management Console</li>\
                                            <li id="19" onclick="AWS_Developer_Tools()">AWS Developer Tools</li>\
                                            <li id="20" onclick="AWS_Management_Tools()">AWS Management Tools</li>\
                                        </ol>\
                                    </td>\
                                </tr>\
                            </form>\
                        </div>\
                        <div id="content"></div>'



        document.getElementById("BID").insertAdjacentElement("beforebegin",en); 
        var content=document.getElementById("content");
        
        var pro= document.createElement("div");            // To create element
        

        pro.setAttribute('id','page');                  // To set id or class name to the created element
                                               
        pro.innerHTML+='<form>\
                                <table>\
                                        <tr>\
                                                <center><h1>Advantages and Disadvantages</h1></center>\
                                                <h2>Advantages of Cloud Computing:-</h2>\
                                                        <p>As we all know that Cloud computing is trending technology. Almost every company\
                                                        switched their services on the cloud to rise the company growth.</p>\
                                                        <h4>Here, we are going to discuss some important advantages of Cloud Computing-</h4>\
                                                        <center><img src="../../../Cloud Computing/medias/IMG/3.png" alter="logo" style="width:100%; height:100%;"></center>\
                                                        <h3>1) Back-up and restore data:-</h3>\
                                                                <p> ●   Once the data is stored in the cloud, it is easier to get back-up and restore that data\
                                                                using the cloud.</p>\
                                                        <h3>2) Improved collaboration:-</h3>\
                                                                <p>●   Cloud applications improve collaboration by allowing groups of people to quickly and\
                                                                easily share information in the cloud via shared storage.</p>\
                                                                <p>●   If your business has two employees or more, then you should be making collaboration a\
                                                                top priority. After all, there is not much point to having a team if it is unable to work like a\
                                                                team. Cloud computing makes collaboration a simple process.</p>\
                                                                <p>●  Team members can view and share information easily and securely across a cloud-\
                                                                based platform.</p>\
                                                                <p>●  Some cloud-based services even provide collaborative social spaces to connect\
                                                                employees across your organization, therefore increasing interest and engagement.\
                                                                Collaboration may be possible without a cloud-computing solution, but it will never be\
                                                                as easy, nor as effective.</p>\
                                                        <h3>3) Excellent accessibility:-</h3>\
                                                                <p>●   Cloud allows us to quickly and easily access store information anywhere, anytime in the\
                                                                whole world, using an internet connection.</p>\
                                                                <p>●   An internet cloud infrastructure increases organization productivity and efficiency by\
                                                                ensuring that our data is always accessible.</p>\
                                                                <p>●   Cloud computing offers simplified and enhanced IT maintenance and management\
                                                                capacities by agreements backed by SLA, central resource administration and managed\
                                                                infrastructure.</p>\
                                                                <p>●   You get to enjoy a basic user interface without any requirement for installation.</p>\
                                                                <p>●   Plus you are assured guaranteed and timely management, maintenance, and delivery of\
                                                                the IT services.</p>\
                                                        <h3>4) Low maintenance cost:-</h3>\
                                                                <p>●   Cloud computing reduces both hardware and software maintenance costs for\
                                                                organizations.The services are free from capital expenditure. There are no huge costs of\
                                                                hardware in cloud computing. You just have to pay as you operate it and enjoy the\
                                                                model based on your subscription plan.</p>\
                                                        <h3>5) Mobility:-</h3>\
                                                                <p>●   Cloud computing allows us to easily access all cloud data via mobile.</p>\
                                                                <p>●   Cloud computing allows mobile access to corporate data via smartphones and devices,\
                                                                which, considering over 2.6 billion smartphones are being used globally today, is a great\
                                                                way to ensure that no one is ever left out of the loop.</p>\
                                                                <p>●   Staff with busy schedules, or who live a long way away from the corporate office, can\
                                                                use this feature to keep instantly up to date with clients and co-worker.\
                                                                Through the cloud, you can offer conveniently accessible information to sales staff who\
                                                                travel, freelance employees, or remote employees, for better work-life balance.</p>\
                                                                <p>●   Therefore, it is not surprising to see that organizations with employee satisfaction listed\
                                                                as a priority are up to 24% more likely to expand cloud usage.</p>\
                                                        <h3>6) IServices in the pay-per-use model:-</h3>\
                                                                <p>●   Cloud computing offers Application Programming Interfaces (APIs) to the users for\
                                                                access services on the cloud and pays the charges as per the usage of service.</p>\
                                                        <h3>7) Unlimited storage capacity:-</h3>\
                                                                <p>●   Cloud offers us a huge amount of storing capacity for storing our important data such as\
                                                                documents, images, audio, video, etc. in one place.</p>\
                                                        <h3>8) Data security:-</h3>\
                                                                <p>●   Data security is one of the biggest advantages of cloud computing. Cloud offers many\
                                                                advanced features related to security and ensures that data is securely stored and\
                                                                handled</p>\
                                                                <p>●   A cloud hosts full-time job is to carefully monitor security, which is significantly more\
                                                                efficient than a conventional in-house system, where an organization must divide its\
                                                                efforts between a myriad of IT concerns, with security being only one of them.</p>\
                                                                <p>●   And while most businesses do not like to openly consider the possibility of internal data\
                                                                theft, the truth is that a staggeringly high percentage of data thefts occur internally and\
                                                                are perpetrated by employees.</p>\
                                                <h2>Disadvantages of Cloud Computing:-</h2>\
                                                        <h4>A list of the disadvantage of cloud computing is given below -</h4>\
                                                        <center><img src="../../../Cloud Computing/medias/IMG/4.png" alter="logo" style="width:100%; height:100%;"></center>\
                                                        <h3>1) Internet Connectivity:-</h3>\
                                                                <p>●   As you know, in cloud computing, every data (image, audio, video, etc.) is stored on the\
                                                                cloud, and we access these data through the cloud by using the internet connection. If\
                                                                you do not have good internet connectivity, you cannot access these data. However, we\
                                                                have no any other way to access data from the cloud.</p>\
                                                        <h3>2) Vendor lock-in:-</h3>\
                                                                <p>●   Vendor lock-in is the biggest disadvantage of cloud computing. Organizations may face\
                                                                problems when transferring their services from one vendor to another. As different\
                                                                vendors provide different platforms, that can cause difficulty moving from one cloud to\
                                                                another.</p>\
                                                        <h3>3) Vulnerability to attacks:-</h3>\
                                                                <p>●   Storing data in the cloud may pose serious challenges of information theft since in the\
                                                                cloud every data of a company is online. Security breach is something that even the\
                                                                best organizations have suffered from and it’s a potential risk in the cloud as well.\
                                                                Although advanced security measures are deployed on the cloud, still storing\
                                                                confidential data in the cloud can be a risky affair.</p>\
                                                        <h3>4) Network connectivity dependency:-</h3>\
                                                                <p>●   Cloud Computing is entirely dependent on the Internet. This direct tie-up with the\
                                                                Internet means that a company needs to have reliable and consistent Internet service as well as\
                                                                a fast connection and bandwidth to reap the benefits of Cloud Computing.</p>\
                                                        <h3>5) Downtime:-</h3>\
                                                                <p>●   Downtime is considered as one of the biggest potential downsides of using Cloud\
                                                                <p>Computing. The cloud providers may sometimes face technical outages that can\
                                                                happen due to various reasons, such as loss of power, low Internet connectivity, data\
                                                                centers going out of</p>\
                                                        <h3>6) Limited Control:-</h3>\
                                                                <p>●   As we know, cloud infrastructure is completely owned, managed, and monitored by the\
                                                                service provider, so the cloud users have less control over the function and execution of\
                                                                services within a cloud infrastructure.</p>\
                                                        <h3>7) Security:-</h3>\
                                                                <p> ●   Although cloud service providers implement the best security standards to store\
                                                                important information. But, before adopting cloud technology, you should be aware that\
                                                                you will be sending all your organizations sensitive information to a third party, i.e., a\
                                                                cloud computing service provider. While sending the data on the cloud, there may be a\
                                                                chance that your organizations information is hacked by Hackers.</p>\
                                        </td>\
                                </table>\
                        </form>';
        var con = document.getElementById("content");    // To append created element into html file
        con.appendChild(pro);

}

function History(){
        var con = document.getElementById("container");    // To append created element into html file
        var Entry= document.getElementById("Entry");               
        con.removeChild(Entry);

        var en= document.createElement("div");            // To create element

        en.setAttribute('id','Entry');                  // To set id or class name to the created element
                                                        // To append html codes into created element
        en.innerHTML+=     '<div id="topics">\
                                <form>\
                                <tr><th><center><h3> Cloud Computing Syllabus</h3></th></center> </tr>\
                                <tr>\
                                    <td>\
                                        <ol>\
                                            <li id="1" onclick="Syllabus()" >Syllabus</li>\
                                            <li id="2" onclick="Introduction()" >Cloud Computing Introduction</li>\
                                            <li id="3" onclick="Advantages_and_Disadvantages()" >Advantages and Disadvantages</li>\
                                            <li id="4" style="color:yellow;">History of Cloud Computing</li>\
                                            <li id="5" onclick="Architecture()">Cloud Computing Architecture</li>\
                                            <li id="6" onclick="Technologies()">Cloud Computing Technologies</li>\
                                            <li id="7" onclick="Cloud_vs_Grid()">Cloud Computing VS Grid Computing</li>\
                                            <li id="8" onclick="Cloud_Computing_Works()">How Dose Cloud Computing Works</li>\
                                            <li id="9" onclick="Applications()">Cloud Computing Applications</li>\
                                            <li id="10" onclick="Security_And_Risk()">Security and Risk of Cloud Computing</li>\
                                            <li id="11" onclick="AWS()">AWS</li>\
                                            <li id="12" onclick="AWS_Architecture()">AWS Architecture</li>\
                                            <li id="13" onclick="AWS_Features()">AWS Features</li>\
                                            <li id="14" onclick="AWS_Pros_And_Cons()">AWS Pros & Cons</li>\
                                            <li id="15" onclick="AWS_Application()">AWS Application</li>\
                                            <li id="16" onclick="AWS_Console_Mobile_App()">AWS Console Mobile App</li>\
                                            <li id="17" onclick="AWS_Account()">AWS Account</li>\
                                            <li id="18" onclick="AWS_Management_Console()">AWS Management Console</li>\
                                            <li id="19" onclick="AWS_Developer_Tools()">AWS Developer Tools</li>\
                                            <li id="20" onclick="AWS_Management_Tools()">AWS Management Tools</li>\
                                        </ol>\
                                    </td>\
                                </tr>\
                            </form>\
                        </div>\
                        <div id="content"></div>'



        document.getElementById("BID").insertAdjacentElement("beforebegin",en);  
        var content=document.getElementById("content");
        
        var pro= document.createElement("div");            // To create element
        

        pro.setAttribute('id','page');                  // To set id or class name to the created element
                                               
        pro.innerHTML+="<form>\
                                <table>\
                                        <tr>\
                                                <center><h1>History of Cloud Computing</h1></center>\
                                                <p>Before emerging the cloud computing, there was Client/Server computing which is\
                                                basically a centralized storage in which all the software applications, all the data and all the\
                                                controls are resided on the server side.</p>\
                                                <p> If a single user wants to access specific data or run a program, he/she need to connect\
                                                to the server and then gain appropriate access, and then he/she can do his/her business.</p>\
                                                <p> Then after, distributed computing came into picture, where all the computers are\
                                                networked together and share their resources when needed.</p>\
                                                <p> Cloud Computing is not a latest technology. Cloud computing has evolved (develop\
                                                gradually) through a number of phases which includes Grid Computing, Utility Computing,\
                                                Application Service Provision, and Software as a Service etc.</p>\
                                                <p> But the overarching (overall) concept of delivering Computing resource through a global\
                                                network is started in the sixties.</p>\
                                                <p> By 2020 The Cloud computing market is forecast to exceed $241 Billion. But how did we\
                                                get here and where did all this started is the history of Cloud computing.</p>\
                                                <p> The actual history of Cloud computing is not that old, the first business and consumer\
                                                Cloud Computing services website (Salesforce.com and Google) were launched in 1999. Cloud\
                                                computing is tied directly to the development of the Internet and Business technology since\
                                                Cloud computing is the solution to the problem of how the Internet can help improve Business\
                                                Technology.</p>\
                                                <p> Business technology has long and fascinating history, one that is almost as long as\
                                                business itself, but the development that most directly influenced the history of Cloud\
                                                computing start with the emergence of computers as providers of real business solutions.\
                                                <p> On the basis of above computing, there was emerged of cloud computing concepts that\
                                                later implemented.</p>\
                                                <p> At around in 1961, John MacCharty suggested in a speech at MIT that computing can be\
                                                sold like a utility, just like a water or electricity. It was a brilliant idea, but like all brilliant ideas, it\
                                                was ahead if its time, as for the next few decades, despite interest in the model, the technology\
                                                simply was not ready for it.</p>\
                                                <h4>But of course time has passed and the technology caught that idea and after few years we\
                                                mentioned that:</h4>\
                                                <p> ● In 1963, DARPA (the Defense Advanced Research Projects Agency), presented MIT with\
                                                $2 million for Project MAC.</p>\
                                                <p>● In 1969, J. C. R. Licklider helped develop the ARPANET (Advanced Research Projects\
                                                Agency Network), a “very” primitive version of the Internet. JCR, or “Lick” was both a\
                                                psychologist and a computer scientist, and promoted a vision called the “Intergalactic\
                                                Computer Network,” in which everyone on the planet would be interconnected by way\
                                                of computers, and able to access information from anywhere.</p>\
                                                <p>● The meaning of Virtualization began shifting in the 1970s, and now describes the\
                                                creation of a virtual machine, that acts like a real computer, with a fully functional\
                                                operating system. The concept of Virtualization has evolved with the Internet, as\
                                                businesses began offering “virtual” private networks as a rentable service.</p>\
                                                <p>● In its early stages, the Cloud was used to express the empty space between the end\
                                                user and the provider. In 1997, Professor Ramnath Chellapa of Emory University defined\
                                                Cloud Computing as the new 'computing paradigm, where the boundaries of\
                                                computing will be determined by economic rationale, rather than technical limits\
                                                alone.'</p>\
                                                <p>● In 1999, Salesforce.com started delivering of applications to users using a simple\
                                                website. The applications were delivered to enterprises over the Internet, and this way\
                                                the dream of computing sold as utility were true.</p>\
                                                <p>● In 2002, Amazon started Amazon Web Services, providing services like storage,\
                                                computation and even human intelligence. However, only starting with the launch of the\
                                                Elastic Compute Cloud in 2006 a truly commercial service open to everybody existed.</p>\
                                                <p>● In 2006, Amazon launched Amazon Web Services, which offers online services to other\
                                                websites, or clients. One of Amazon Web Services’ sites, called Amazon Mechanical\
                                                Turk, provides a variety of Cloud-based services including storage, computation and\
                                                “human intelligence.” Another of Amazon Web Services’ sites is the Elastic Compute\
                                                Cloud (EC2), allowing individuals to rent virtual computers and use their own programs\
                                                and applications.</p>\
                                                <p>● In 2007, IBM, Google, and several universities joined forces to develop a server farm for\
                                                research projects needing both fast processors and huge data sets. The University of\
                                                Washington was the first to sign up and use resources provided by IBM and Google.\
                                                Carnegie Mellon University, MIT, Stanford University, the University of Maryland, and the\
                                                University of California at Berkeley, quickly followed suit. The universities immediately\
                                                realized computer experiments can be done faster and for less money, if IBM and\
                                                Google were supporting their research.</p>\
                                                <p>● Eucalyptus offered the first AWS API compatible platform, which was used for\
                                                distributing private Clouds, in 2008. In the same year, NASA’s OpenNebula provided\
                                                the first open-source software for deploying Private and Hybrid Clouds. Many of its most\
                                                innovative features focused on the needs of major businesses.</p>\
                                                <p>● In 2009, Google Apps also started to provide cloud computing enterprise applications.</p>\
                                                <p>● In 2011, IBM introduced the IBM SmartCloud framework, in support of Smarter\
                                                Planet (a cultural thinking project). Then, Apple launched the ICloud, which focuses on\
                                                storing more personal information (photos, music, videos, etc.). Also, during this year,\
                                                Microsoft began advertising the Cloud on television, making the general public aware of\
                                                its ability to store photos, or video, with easy access.</p>\
                                                <p>● Oracle introduced the Oracle Cloud in 2012, offering the three basics for business, IaaS\
                                                (Infrastructure-as-a-Service), PaaS (Platform-as-a-Service), and SAAS (Software-as-a-\
                                                Service).</p>\
                                                <p>Of course, all the big players are present in the cloud computing evolution, some were earlier,\
                                                some were later. In 2009, Microsoft launched Windows Azure, and companies like Oracle and\
                                                HP have all joined the game. This proves that today, cloud computing has become mainstream.</p>\
                                        </td>\
                                </table>\
                        </form>";
        var con = document.getElementById("content");    // To append created element into html file
        con.appendChild(pro);
}

function Architecture(){
        var con = document.getElementById("container");    // To append created element into html file
        var Entry= document.getElementById("Entry");               
        con.removeChild(Entry);

        var en= document.createElement("div");            // To create element

        en.setAttribute('id','Entry');                  // To set id or class name to the created element
                                                        // To append html codes into created element
        en.innerHTML+=     '<div id="topics">\
                                <form>\
                                <tr><th><center><h3> Cloud Computing Syllabus</h3></th></center> </tr>\
                                <tr>\
                                    <td>\
                                        <ol>\
                                            <li id="1" onclick="Syllabus()" >Syllabus</li>\
                                            <li id="2" onclick="Introduction()" >Cloud Computing Introduction</li>\
                                            <li id="3" onclick="Advantages_and_Disadvantages()" >Advantages and Disadvantages</li>\
                                            <li id="4" onclick="History()">History of Cloud Computing</li>\
                                            <li id="5" style="color:yellow;">Cloud Computing Architecture</li>\
                                            <li id="6" onclick="Technologies()">Cloud Computing Technologies</li>\
                                            <li id="7" onclick="Cloud_vs_Grid()">Cloud Computing VS Grid Computing</li>\
                                            <li id="8" onclick="Cloud_Computing_Works()">How Dose Cloud Computing Works</li>\
                                            <li id="9" onclick="Applications()">Cloud Computing Applications</li>\
                                            <li id="10" onclick="Security_And_Risk()">Security and Risk of Cloud Computing</li>\
                                            <li id="11" onclick="AWS()">AWS</li>\
                                            <li id="12" onclick="AWS_Architecture()">AWS Architecture</li>\
                                            <li id="13" onclick="AWS_Features()">AWS Features</li>\
                                            <li id="14" onclick="AWS_Pros_And_Cons()">AWS Pros & Cons</li>\
                                            <li id="15" onclick="AWS_Application()">AWS Application</li>\
                                            <li id="16" onclick="AWS_Console_Mobile_App()">AWS Console Mobile App</li>\
                                            <li id="17" onclick="AWS_Account()">AWS Account</li>\
                                            <li id="18" onclick="AWS_Management_Console()">AWS Management Console</li>\
                                            <li id="19" onclick="AWS_Developer_Tools()">AWS Developer Tools</li>\
                                            <li id="20" onclick="AWS_Management_Tools()">AWS Management Tools</li>\
                                        </ol>\
                                    </td>\
                                </tr>\
                            </form>\
                        </div>\
                        <div id="content"></div>'



        document.getElementById("BID").insertAdjacentElement("beforebegin",en);  
        var content=document.getElementById("content");
        
        var pro= document.createElement("div");            // To create element
        

        pro.setAttribute('id','page');                  // To set id or class name to the created element
                                               
        pro.innerHTML+="<form>\
                                <table>\
                                        <tr>\
                                                <center><h1>Cloud Computing Architecture</h1></center>\
                                                <p>&emsp;&emsp; As we know, cloud computing technology is used by both small and large organizations\
                                                        to store the information in cloud and access it from anywhere at anytime using the internet\
                                                        connection.</p>\
                                                <p>&emsp;&emsp; Cloud computing architecture is a combination of service-oriented\
                                                        architecture and event-driven architecture.</p>\
                                                <p>&emsp;&emsp; Cloud computing architecture refers to the components and subcomponents required\
                                                        for cloud computing. These components typically consist of a front end platform (fat client, thin\
                                                        client, mobile device), back end platforms (servers, storage), a cloud based delivery, and a\
                                                        network (Internet, Intranet, Intercloud). Combined, these components make up cloud\
                                                        computing architecture.</p>\
                                                <h3>Cloud computing architecture is divided into the following two parts -</h4>\
                                                        <table> <ul>&emsp;  ● Front End</ul>\
                                                                <ul>&emsp;  ● Back End</ul>\
                                                         </table>\
                                                <h4>    The below diagram shows the architecture of cloud computing </h4>\
                                                <img src='../../../Cloud Computing/medias/IMG/5.png' style='width:100%;'>\
                                                <h3> Front End:-</h3> \
                                                <p>&emsp;   ● The front end is used by the client. It contains client-side interfaces and applications\
                                                        that are required to access the cloud computing platforms. The front end includes web\
                                                        servers (including Chrome, Firefox, internet explorer, etc.), thin & fat clients, tablets,\
                                                        and mobile devices</p>\
                                                <p>&emsp; ●.Front-end is the side that is visible to the client, customer, or user. Front-end pieces\
                                                        include the user interface and the client’s computer system or network that is used for\
                                                        accessing the cloud system. You have probably noticed that different cloud computing\
                                                        systems use different user interfaces—for example, not only can you choose from a\
                                                        variety of web browsers (including Chrome, Safari, Firefox, etc.), but the Google Docs\
                                                        user interface is different than that of Salesforce.</p>\
                                                <h3>   Back End:-</h3> \
                                                <p>&emsp; ● The back end is used by the service provider. It manages all the resources that are\
                                                        required to provide cloud computing services. It includes a huge amount of data\
                                                        storage, security mechanism, virtual machines, deploying models, servers, traffic\
                                                        control mechanisms, etc.</p>\
                                                <p>&emsp; ● On the other hand, the back-end pieces are on the side used by the service provider.\
                                                        These include various servers, computers, data storage systems, virtual machines, and\
                                                        programs that together constitute the cloud of computing services. The back-end side\
                                                        also is responsible for providing security mechanisms, traffic control, and protocols\
                                                        that connect networked computers for communication.</p>\
                                                <h5>Note: Both front end and back end are connected to others through a network, generally\
                                                        using the internet connection.</h5>\
                                                <h2>Components of Cloud Computing Architecture:-</h2>\
                                                <h4>There are the following components of cloud computing architecture -</h4>\
                                                <h3>1. Client Infrastructure:-</h3>\
                                                <p>&emsp;  ● Client Infrastructure is a Front end component. It provides GUI (Graphical User\
                                                        Interface) to interact with the cloud.</p>\
                                                <h3>2. Application:-</h3>\
                                                <p>&emsp;  ● The application may be any software or platform that a client wants to access.</p>\
                                                <h3>3. Service:-</h3>\
                                                <p>&emsp;  ● A Cloud Services manages that which type of service you access according to the\
                                                        client’s requirement.</p>\
                                                <h2>&emsp;&emsp;Cloud computing offers the following three type of services:</h2>\
                                                <h3>&emsp;&emsp;&emsp;i. Software as a Service (SaaS) :-</h3>\
                                                <p>&emsp;  ● It is also known as cloud application services. Mostly, SaaS applications run\
                                                        directly through the web browser means we do not require to download and install\
                                                        these applications.</p>\
                                                <p>&emsp;  ● Consumers interact with the top layer of the cloud, Saas.</p>\
                                                <p>&emsp; ● Whereas users view IaaS and PaaS as raw infrastructure and platform building\
                                                        tools/environments, the SaaS layer of the cloud is the finished product as seen\
                                                        through mobile applications, enterprise level business solutions and every single\
                                                        app held within the Apple App Store and the Google Play store.Some important\
                                                        example of SaaS is given below –</p>\
                                                <h5>&emsp;&emsp;Example: Google Apps, Salesforce Dropbox, Slack, Hubspot, Cisco WebEx.</h5>\
                                                <h3>&emsp;&emsp;ii. Platform as a Service (PaaS) :-</h3>\
                                                <p>&emsp; ● It is also known as cloud platform services. It is quite similar to SaaS, but the\
                                                        difference is that PaaS provides a platform for software creation, but using SaaS, we\
                                                        can access software over the internet without the need of any platform.</p>\
                                                <p>&emsp; ● PaaS is the secondary layer of the cloud providing developers with the tools needed\
                                                        to build applications/software and the development environment required to build,\
                                                        stage, edit and launch applications. Much like the IaaS layer of the cloud, PaaS\
                                                        answers a specific need, dev tools, and environments, enabling companies and\
                                                        individual developers to build the products and services they eventually bring to\
                                                        market. PaaS is built on top of the IaaS layer as it requires RAM, bandwidth, CPU to\
                                                        operate.</p>\
                                                <p>&emsp; ● Traditional providers of PaaS are Amazon, Cloud Foundry, Long Jump, Rackspace,\
                                                        and Google. PaaS is the middle layer of the cloud which leverages IaaS resources to\
                                                        build SaaS applications.</p>\
                                                <h5>&emsp;&emsp;Example: Windows Azure, Force.com, Magento Commerce Cloud, OpenShift.</h5>\
                                                <h3>&emsp;&emsp;iii. Infrastructure as a Service (IaaS) :-</h3>\
                                                <p>&emsp; ● It is also known as cloud infrastructure services. It is responsible for managing\
                                                        applications data, middleware, and runtime environments.</p>\
                                                <p>&emsp; ● IaaS is the primary layer of the cloud providing data center hardware (e.g. servers,\
                                                        nodes, hypervisors) to consumers and companies for a low monthly price. IaaS\
                                                        enables companies to lease servers packed with computing resources like RAM,\
                                                        bandwidth, CPU and IP, hosted in a remote data center.</p>\
                                                <p>&emsp; ● Traditional providers of IaaS are Digital Ocean, Amazon, Google, Microsoft, and\
                                                        Rackspace. IaaS is the foundation for PaaS and SaaS.</p>\
                                                <h5>&emsp;&emsp;Example: Amazon Web Services (AWS) EC2, Google Compute Engine (GCE), Cisco\
                                                        Metapod.</h5>\
                                                <h3>4. Runtime Cloud:-</h3>\
                                                <p>&emsp; ● Runtime Cloud provides the execution and runtime environment to the virtual\
                                                        machines.</p>\
                                                <h3>5. Storage:-</h3>\
                                                <p>&emsp; ● Storage is one of the most important components of cloud computing. It provides a\
                                                        huge amount of storage capacity in the cloud to store and manage data.</p>\
                                                <h3>6. Infrastructure:-</h3>\
                                                <p>&emsp; ● It provides services on the host level, application level, and network level. Cloud\
                                                        infrastructure includes hardware and software components such as servers, storage,\
                                                        network devices, virtualization software, and other storage resources that are needed to\
                                                        support the cloud computing model.</p>\
                                                <h3>7. Management:-</h3>\
                                                <p>&emsp; ● Management is used to manage components such as application, service, runtime\
                                                        cloud, storage, infrastructure, and other security issues in the backend and establish\
                                                        coordination between them.</p>\
                                                <h3>8. Security:-</h3>\
                                                <p>&emsp; ● Security is an in-built back end component of cloud computing. It implements a\
                                                        security mechanism in the back end.</p>\
                                                <h3>9. Internet:-</h3>\
                                                <p>&emsp; ● The Internet is medium through which front end and back end can interact and\
                                                        communicate with each other.</p>\
                                        </td>\
                                </table>\
                        </form>";
        var con = document.getElementById("content");    // To append created element into html file
        con.appendChild(pro);
}

function Technologies(){}

function Cloud_vs_Grid(){}

function Cloud_Computing_Works(){}

function Applications(){}

function Security_And_Risk(){}

function AWS(){}

function AWS_Architecture(){}

function AWS_Features(){}

function AWS_Pros_And_Cons(){}

function AWS_Application(){}

function AWS_Console_Mobile_App(){}

function AWS_Account(){}

function AWS_Management_Console(){}

function AWS_Developer_Tools(){}

function AWS_Management_Tools(){}



