
AMIID	ami-094a0fafc1bf73bd6
HTTPACCESS	sg-0a2e15bb7517be1b3
COMMANDHOSTIP	34.217.215.44
KEYNAME	vockey
SUBNETID	subnet-087851ee5a3ba20b1


ec2-user


aws ec2 run-instances --key-name vockey --instance-type t3.micro --image-id ami-094a0fafc1bf73bd6 --user-data file:///home/ec2-user/UserData.txt --security-group-ids sg-0a2e15bb7517be1b3 --subnet-id subnet-087851ee5a3ba20b1 --associate-public-ip-address --tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=WebServerBaseImage}]' --output text --query 'Instances[*].InstanceId'

aws ec2 wait instance-running --instance-ids i-06545de0d4aac98a6



ssh -i labsuser.pem ec2-user@35.87.32.239


Instance ID = |  i-04e5f89fc92e0b51c 
Instance type = t3.small
Public DNS = ec2-34-217-75-10.us-west-2.compute.amazonaws.com
Public IP addres = 34.217.75.10
Availability Zone = us-west-2a
VPC ID = vpc-0c1628b8d687fa4d3
Group ID = sg-059f9af96b5ad9f50
IPv4 CIDR block = 10.200.0.0/20
Subnet ID = subnet-0669b4dd6e479a1da
IPv4 CIDR block = 10.200.0.0/24
Lista de Availability Zones = {
    "AvailabilityZones": [
        {
            "OptInStatus": "opt-in-not-required",
            "Messages": [],
            "ZoneId": "usw2-az1",
            "GroupName": "us-west-2",
            "State": "available",
            "NetworkBorderGroup": "us-west-2",
            "ZoneType": "availability-zone",
            "ZoneName": "us-west-2a",
            "RegionName": "us-west-2"
        },
        {
            "OptInStatus": "opt-in-not-required",
            "Messages": [],
            "ZoneId": "usw2-az2",
            "GroupName": "us-west-2",
            "State": "available",
            "NetworkBorderGroup": "us-west-2",
            "ZoneType": "availability-zone",
            "ZoneName": "us-west-2b",
            "RegionName": "us-west-2"
        },
        {
            "OptInStatus": "opt-in-not-required",
            "Messages": [],
            "ZoneId": "usw2-az3",
            "GroupName": "us-west-2",
            "State": "available",
            "NetworkBorderGroup": "us-west-2",
            "ZoneType": "availability-zone",
            "ZoneName": "us-west-2c",
            "RegionName": "us-west-2"
        },
        {
            "OptInStatus": "opt-in-not-required",
            "Messages": [],
            "ZoneId": "usw2-az4",
            "GroupName": "us-west-2",
            "State": "available",
            "NetworkBorderGroup": "us-west-2",
            "ZoneType": "availability-zone",
            "ZoneName": "us-west-2d",
            "RegionName": "us-west-2"
        }
    ]
}



aws ec2 describe-instances --instance-ids i-04e5f89fc92e0b51c --query 'Reservations[0].Instances[0].PublicDnsName' --output text
aws ec2 describe-instances --instance-ids i-04e5f89fc92e0b51c --query 'Reservations[0].Instances[0].PublicIpAddress' --output text
aws ec2 describe-instances --instance-ids i-04e5f89fc92e0b51c  --query 'Reservations[0].Instances[0].Placement.AvailabilityZone' --output text
aws ec2 describe-instances --instance-ids i-04e5f89fc92e0b51c --query 'Reservations[0].Instances[0].VpcId' --output text
aws ec2 describe-instances --instance-ids i-04e5f89fc92e0b51c --query 'Reservations[0].Instances[0].SecurityGroups[0].GroupId' --output text
aws ec2 describe-vpcs --vpc-ids vpc-0c1628b8d687fa4d3 --query 'Vpcs[0].CidrBlock' --output text
aws ec2 describe-instances --instance-ids i-04e5f89fc92e0b51c --query 'Reservations[0].Instances[0].SubnetId' --output text
aws ec2 describe-subnets --subnet-ids subnet-0669b4dd6e479a1da --query 'Subnets[0].CidrBlock' --output text
aws ec2 describe-availability-zones --region us-west-2a


aws ec2 describe-instances \
--filters "Name=tag:Name,Values= CafeInstance" \
--query "Reservations[*].Instances[*].[i-04e5f89fc92e0b51c,t3.small,ec2-34-217-75-10.us-west-2.compute.amazonaws.com,34.217.75.10,Placement.us-west-2,vpc-0c1628b8d687fa4d3,SecurityGroups[*].sg-059f9af96b5ad9f50]"



|  i-04e5f89fc92e0b51c                               |
|  t3.small                                          |
|  ec2-34-217-75-10.us-west-2.compute.amazonaws.com  |
|  34.217.75.10                                      |
|  us-west-2a                                        |
|  vpc-0c1628b8d687fa4d3                             |
|  sg-059f9af96b5ad9f50  


aws ec2 describe-vpcs --vpc-ids vpc-0c1628b8d687fa4d3 \
--filters "Name=tag:Name,Values= Cafe VPC" \
--query "Vpcs[*].CidrBlock"

"10.200.0.0/20"


Cafe vpc-0c1628b8d687fa4d3 34.217.75.10 CIDR block: 10.200.0.0/20


aws ec2 describe-subnets \
--filters "Name=vpc-id,Values=vpc-0c1628b8d687fa4d3" \
--query "Subnets[*].[SubnetId,CidrBlock]"

[
    "subnet-0669b4dd6e479a1da",
    "10.200.0.0/24"
]


aws ec2 describe-availability-zones \
--filters "Name=region-name,Values=us-west-2" \
--query "AvailabilityZones[*].ZoneName"

[
    "us-west-2a",
    "us-west-2b",
    "us-west-2c",
    "us-west-2d"
]


Order Number: 1     Date: 2023-11-04     Time: 18:12:52     Total Amount: $35.50

Item	Price	Quantity	Amount
Croissant	$1.50	5	$7.50
Strawberry Blueberry Tart	$3.50	4	$14.00
Strawberry Tart	$3.50	4	$14.00





aws ec2 create-security-group \
--group-name CafeDatabaseSG \
--description "Security group for Cafe database" \
--vpc-id vpc-0c1628b8d687fa4d3

"GroupId": "sg-012c42dc0f6fbc2aa"

aws ec2 authorize-security-group-ingress \
--group-id sg-012c42dc0f6fbc2aa \
--protocol tcp --port 3306 \
--source-group sg-059f9af96b5ad9f50


[
    [
        "CafeDatabaseSG",
        "sg-012c42dc0f6fbc2aa",
        [
            {
                "PrefixListIds": [],
                "FromPort": 3306,
                "IpRanges": [],
                "ToPort": 3306,
                "IpProtocol": "tcp",
                "UserIdGroupPairs": [
                    {
                        "UserId": "451090634178",
                        "GroupId": "sg-059f9af96b5ad9f50"
                    }
                ],
                "Ipv6Ranges": []
            }
        ]
    ]
]


aws ec2 create-subnet \
--vpc-id vpc-0c1628b8d687fa4d3  \
--cidr-block 10.200.2.0/23 \
--availability-zone us-west-2a

{
    "Subnet": {
        "MapPublicIpOnLaunch": false,
        "AvailabilityZoneId": "usw2-az1",
        "AvailableIpAddressCount": 507,
        "DefaultForAz": false,
        "SubnetArn": "arn:aws:ec2:us-west-2:451090634178:subnet/subnet-0ec4dd4677a2c91c0",
        "Ipv6CidrBlockAssociationSet": [],
        "VpcId": "vpc-0c1628b8d687fa4d3",
        "State": "available",
        "AvailabilityZone": "us-west-2a",
        "SubnetId": "subnet-0ec4dd4677a2c91c0",
        "OwnerId": "451090634178",
        "CidrBlock": "10.200.2.0/23",
        "AssignIpv6AddressOnCreation": false
    }
}

aws ec2 create-subnet \
--vpc-id vpc-0c1628b8d687fa4d3 \
--cidr-block 10.200.10.0/23 \
--availability-zone us-west-2d

{
    "Subnet": {
        "MapPublicIpOnLaunch": false,
        "AvailabilityZoneId": "usw2-az4",
        "AvailableIpAddressCount": 507,
        "DefaultForAz": false,
        "SubnetArn": "arn:aws:ec2:us-west-2:451090634178:subnet/subnet-055f6b7e2efbd7ca4",
        "Ipv6CidrBlockAssociationSet": [],
        "VpcId": "vpc-0c1628b8d687fa4d3",
        "State": "available",
        "AvailabilityZone": "us-west-2d",
        "SubnetId": "subnet-055f6b7e2efbd7ca4",
        "OwnerId": "451090634178",
        "CidrBlock": "10.200.10.0/23",
        "AssignIpv6AddressOnCreation": false
    }
}


aws rds create-db-subnet-group \
--db-subnet-group-name "CafeDB Subnet Group" \
--db-subnet-group-description "DB subnet group for Cafe" \
--subnet-ids subnet-0ec4dd4677a2c91c0 subnet-055f6b7e2efbd7ca4 \
--tags "Key=Name,Value= CafeDatabaseSubnetGroup"

{
    "DBSubnetGroup": {
        "Subnets": [
            {
                "SubnetStatus": "Active",
                "SubnetIdentifier": "subnet-0ec4dd4677a2c91c0",
                "SubnetOutpost": {},
                "SubnetAvailabilityZone": {
                    "Name": "us-west-2a"
                }
            },
            {
                "SubnetStatus": "Active",
                "SubnetIdentifier": "subnet-055f6b7e2efbd7ca4",
                "SubnetOutpost": {},
                "SubnetAvailabilityZone": {
                    "Name": "us-west-2d"
                }
            }
        ],
        "VpcId": "vpc-0c1628b8d687fa4d3",
        "DBSubnetGroupDescription": "DB subnet group for Cafe",
        "SubnetGroupStatus": "Complete",
        "DBSubnetGroupArn": "arn:aws:rds:us-west-2:451090634178:subgrp:cafedb subnet group",
        "DBSubnetGroupName": "cafedb subnet group"
    }
}


aws rds create-db-instance \
--db-instance-identifier CafeDBInstance \
--engine mariadb \
--engine-version 10.5.16 \
--db-instance-class db.t3.micro \
--allocated-storage 20 \
--availability-zone us-west-2d \
--db-subnet-group-name "CafeDB Subnet Group" \
--vpc-security-group-ids sg-012c42dc0f6fbc2aa \
--no-publicly-accessible \
--master-username root --master-user-password 'Re:Start!9'

{
    "DBInstance": {
        "PubliclyAccessible": false,
        "MasterUsername": "root",
        "MonitoringInterval": 0,
        "LicenseModel": "general-public-license",
        "VpcSecurityGroups": [
            {
                "Status": "active",
                "VpcSecurityGroupId": "sg-012c42dc0f6fbc2aa"
            }
        ],
        "CopyTagsToSnapshot": false,
        "OptionGroupMemberships": [
            {
                "Status": "in-sync",
                "OptionGroupName": "default:mariadb-10-5"
            }
        ],
        "PendingModifiedValues": {
            "MasterUserPassword": "****"
        },
        "Engine": "mariadb",
        "MultiAZ": false,
        "DBSecurityGroups": [],
        "DBParameterGroups": [
            {
                "DBParameterGroupName": "default.mariadb10.5",
                "ParameterApplyStatus": "in-sync"
            }
        ],
        "PerformanceInsightsEnabled": false,
        "AutoMinorVersionUpgrade": true,
        "PreferredBackupWindow": "09:40-10:10",
        "DBSubnetGroup": {
            "Subnets": [
                {
                    "SubnetStatus": "Active",
                    "SubnetIdentifier": "subnet-0ec4dd4677a2c91c0",
                    "SubnetOutpost": {},
                    "SubnetAvailabilityZone": {
                        "Name": "us-west-2a"
                    }
                },
                {
                    "SubnetStatus": "Active",
                    "SubnetIdentifier": "subnet-055f6b7e2efbd7ca4",
                    "SubnetOutpost": {},
                    "SubnetAvailabilityZone": {
                        "Name": "us-west-2d"
                    }
                }
            ],
            "DBSubnetGroupName": "cafedb subnet group",
            "VpcId": "vpc-0c1628b8d687fa4d3",
            "DBSubnetGroupDescription": "DB subnet group for Cafe",
            "SubnetGroupStatus": "Complete"
        },
        "ReadReplicaDBInstanceIdentifiers": [],
        "AllocatedStorage": 20,
        "DBInstanceArn": "arn:aws:rds:us-west-2:451090634178:db:cafedbinstance",
        "BackupRetentionPeriod": 1,
        "PreferredMaintenanceWindow": "mon:08:05-mon:08:35",
        "DBInstanceStatus": "creating",
        "IAMDatabaseAuthenticationEnabled": false,
        "EngineVersion": "10.5.16",
        "DeletionProtection": false,
        "AvailabilityZone": "us-west-2d",
        "DomainMemberships": [],
        "StorageType": "gp2",
        "DbiResourceId": "db-KVKJI3B4CAGBSYB5MOKSJEIJIY",
        "CACertificateIdentifier": "rds-ca-2019",
        "StorageEncrypted": false,
        "AssociatedRoles": [],
        "DBInstanceClass": "db.t3.micro",
        "DbInstancePort": 0,
        "DBInstanceIdentifier": "cafedbinstance"
    }
}


[
    [
        "cafedbinstance.chuzvfeighlt.us-west-2.rds.amazonaws.com",
        "us-west-2d",
        "09:40-10:10",
        1,
        "available"
    ]
]


mysql --user=root --password='Re:Start!9' \
--host=cafedbinstance.chuzvfeighlt.us-west-2.rds.amazonaws.com \
< cafedb-backup.sql


mysql --user=root --password='Re:Start!9' \
--host=cafedbinstance.chuzvfeighlt.us-west-2.rds.amazonaws.com \
mom_pop_db

mysql --user=root --password='Re:Start!9' \
--host=cafedbinstance.chuzvfeighlt.us-west-2.rds.amazonaws.com \
cafe_db

select * from product;