 

function en(){
        
        var en= document.createElement("div");            // To create element
        

        en.setAttribute('id','Entry');                  // To set id or class name to the created element
        
                                                        // To append html codes into created element
        en.innerHTML+=     '<div id="topics">\
                                <form>\
                                <tr><th><center><h3 color="red"> Cloud Computing Syllabus</h3></th></center> </tr>\
                                <tr>\
                                    <td>\
                                        <ul>\
                                            <li id="1" onclick="CloudComputingSyllabus()" >Syllabus</li>\
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
                                        </ul>\
                                    </td>\
                                </tr>\
                            </form>\
                        </div>\
                        <div id="content" style="margin-top:8%;padding-left:10%;" ><img src="../Common/IMG/CloudComputing/1.png" alt="logo"></div>'



        var con = document.getElementById("container");    // To append created element into html file
        con.appendChild(en);                 
        con.removeChild(int);    // To remove elements
                      
                
 }


function Syllabus(){

        var en= document.createElement("div");            // To create element

        en.setAttribute('id','Entry');                  // To set id or class name to the created element
                                                        // To append html codes into created element
        en.innerHTML+=     '<div id="topics">\
                                <form>\
                                <tr><th><center><h3> Cloud Computing Syllabus</h3></th></center> </tr>\
                                <tr>\
                                    <td>\
                                        <ul>\
                                            <li id="1">Syllabus</li>\
                                            <li id="2">Cloud Computing Introduction</li>\
                                            <li id="3">Advantages and Disadvantages</li>\
                                            <li id="4">History of Cloud Computing</li>\
                                            <li id="5">Cloud Computing Architecture</li>\
                                            <li id="6">Cloud Computing Technologies</li>\
                                            <li id="7">Cloud Computing VS Grid Computing</li>\
                                            <li id="8">How Dose Cloud Computing Works</li>\
                                            <li id="9">Cloud Computing Applications</li>\
                                            <li id="10">Security and Risk of Cloud Computing</li>\
                                            <li id="11">AWS</li>\
                                            <li id="12">AWS Architecture</li>\
                                            <li id="13">AWS Features</li>\
                                            <li id="14">AWS Pros & Cons</li>\
                                            <li id="15">AWS Application</li>\
                                            <li id="16">AWS Console Mobile App</li>\
                                            <li id="17">AWS Account</li>\
                                            <li id="18">AWS Management Console</li>\
                                            <li id="19">AWS Developer Tools</li>\
                                            <li id="20">AWS Management Tools</li>\
                                        </ul>\
                                    </td>\
                                </tr>\
                            </form>\
                        </div>\
                        <div id="content"></div>'



        var con = document.getElementById("container");    // To append created element into html file
        con.appendChild(en);                 
        con.removeChild(Entry);


        var content=document.getElementById("content");
        
        var pro= document.createElement("nav");            // To create element
        

        pro.setAttribute('id','page1');                  // To set id or class name to the created element
                                               
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
        var bt = document.getElementById("bt");            // To remove elements
        con.removeChild(bt);
      }


function Introduction(){

                var en= document.createElement("div");            // To create element

                en.setAttribute('id','Entry');                  // To set id or class name to the created element
                                                                // To append html codes into created element
                en.innerHTML+=     '<div id="topics">\
                                        <form>\
                                        <tr><th><center><h3> Cloud Computing Syllabus</h3></th></center> </tr>\
                                        <tr>\
                                                <td>\
                                                <ul>\
                                                        <li id="1" onclick="CloudComputingSyllabus()">Syllabus</li>\
                                                        <li id="2">Cloud Computing Introduction</li>\
                                                        <li id="3">Advantages and Disadvantages</li>\
                                                        <li id="4">History of Cloud Computing</li>\
                                                        <li id="5">Cloud Computing Architecture</li>\
                                                        <li id="6">Cloud Computing Technologies</li>\
                                                        <li id="7">Cloud Computing VS Grid Computing</li>\
                                                        <li id="8">How Dose Cloud Computing Works</li>\
                                                        <li id="9">Cloud Computing Applications</li>\
                                                        <li id="10">Security and Risk of Cloud Computing</li>\
                                                        <li id="11">AWS</li>\
                                                        <li id="12">AWS Architecture</li>\
                                                        <li id="13">AWS Features</li>\
                                                        <li id="14">AWS Pros & Cons</li>\
                                                        <li id="15">AWS Application</li>\
                                                        <li id="16">AWS Console Mobile App</li>\
                                                        <li id="17">AWS Account</li>\
                                                        <li id="18">AWS Management Console</li>\
                                                        <li id="19">AWS Developer Tools</li>\
                                                        <li id="20">AWS Management Tools</li>\
                                                </ul>\
                                                </td>\
                                        </tr>\
                                        </form>\
                                </div>\
                                <div id="content"></div>'



                var con = document.getElementById("container");    // To append created element into html file
                con.appendChild(en);                 
                con.removeChild(Entry);


                var content=document.getElementById("content");

                var pro= document.createElement("nav");            // To create element


                pro.setAttribute('id','page1');                  // To set id or class name to the created element
                                                        
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
                var bt = document.getElementById("bt");            // To remove elements
                con.removeChild(bt);
}

function Advantages_and_Disadvantages(){}

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



