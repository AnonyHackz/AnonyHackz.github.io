 

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
                                <img id="intIMG" src="../Cloud Computing/medias/IMG/Entry.png" alter="logo" style="margin-top:7%;width:50%; height:120%;">\
                                <video id="intVideo" autoplay controls loop style="margin-top:8%;width:47%; height:95%; padding-left:2%;">\
                                        <source src="../Cloud Computing/medias/Videos/Animations/CC1.mp4" type="video/mp4">\
                                </video>\
                        </div>'
                      
                                
                     



        var con = document.getElementById("container");    // To append created element into html file
        con.appendChild(en);                 
        con.removeChild(int);    // To remove elements
                      
                
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



        con.appendChild(en); 
        var content=document.getElementById("content");
        
        var pro= document.createElement("nav");            // To create element
        

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



        con.appendChild(en); 
        var content=document.getElementById("content");
        
        var pro= document.createElement("nav");            // To create element
        

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
                                                        <img src="../Cloud Computing/medias/IMG/1.png" alter="logo" style="padding-left:3%;">\
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
                                                        <center><img src="../Cloud Computing/medias/IMG/2.png" alter="logo" style="width:100%; height:100%;"></center>\
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



        con.appendChild(en); 
        var content=document.getElementById("content");
        
        var pro= document.createElement("nav");            // To create element
        

        pro.setAttribute('id','page');                  // To set id or class name to the created element
                                               
        pro.innerHTML+='<form>\
                                <table>\
                                        <tr>\
                                                <center><h1>Advantages and Disadvantages</h1></center>\
                                                <h2>Advantages of Cloud Computing:-</h2>\
                                                        <p>As we all know that Cloud computing is trending technology. Almost every company\
                                                        switched their services on the cloud to rise the company growth.</p>\
                                                        <h4>Here, we are going to discuss some important advantages of Cloud Computing-</h4>\
                                                        <center><img src="../Cloud Computing/medias/IMG/3.png" alter="logo" style="width:100%; height:100%;"></center>\
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
                                                        <center><img src="../Cloud Computing/medias/IMG/4.png" alter="logo" style="width:100%; height:100%;"></center>\
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

function History(){}

function Architecture(){}

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



