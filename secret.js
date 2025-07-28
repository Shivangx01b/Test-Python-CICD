// test-secrets.js - Dummy test data for secret detection
// This file contains fake credentials for testing Gitleaks rules

// ==================== DATABASE CONNECTION STRINGS ====================

// MongoDB Connection Strings
const MONGODB_URI = "mongodb://testuser:testpass123@cluster0.mongodb.net:27017/testdb?retryWrites=true";
const MONGODB_SRV = "mongodb+srv://admin:mySecretPassword@production-cluster.ab1cd.mongodb.net/myapp";
const MONGODB_LOCAL = "mongodb://dbuser:strongPassword456@localhost:27017/localdb";

// MySQL Connection Strings  
const MYSQL_URI = "mysql://root:admin123@mysql-server.company.com:3306/production_db";
const MYSQL_LOCAL = "mysql://webapp:webpass789@127.0.0.1:3306/webapp_db?charset=utf8";

// PostgreSQL Connection Strings
const POSTGRES_URI = "postgresql://postgres:pgpassword@db.example.com:5432/appdb";
const POSTGRES_ALT = "postgres://user:pass123@localhost:5432/testdb";
const POSTGRES_PROD = "postgresql://produser:prod_secret_2023@prod-db.company.com:5432/production";

// Redis Connection Strings
const REDIS_URI = "redis://:redispassword123@redis-cluster.amazonaws.com:6379/0";
const REDIS_SSL = "rediss://default:complexRedisPass@secure-redis.com:6380/1";

// Microsoft SQL Server
const MSSQL_URI = "mssql://sa:SqlServerPass123@sqlserver.company.com:1433/CompanyDB";
const SQLSERVER_URI = "sqlserver://dbadmin:AdminPass456@mssql-prod.internal:1433/ProductionDB";

// Oracle Database
const ORACLE_URI = "oracle://system:oraclepass@oracle-db.company.com:1521/XE";

// Cassandra
const CASSANDRA_URI = "cassandra://cassuser:casspass123@cassandra-cluster.com:9042/keyspace1";

// Neo4j
const NEO4J_URI = "neo4j://neo4j:neo4jpassword@graph-db.company.com:7687";
const NEO4J_SSL = "neo4j+s://admin:graphsecret@secure-graph.com:7687";

// Cloud Database URLs
const DOCUMENTDB_URI = "mongodb://docdbuser:docdbpass123@sample-cluster.cluster-xyz.docdb.us-east-1.amazonaws.com:27017/sampledb";
const RDS_MYSQL = "mysql://rdsuser:rdspassword@prod-mysql.c1xyz2.rds.us-west-2.amazonaws.com:3306/webapp";
const RDS_POSTGRES = "postgresql://rdsadmin:rdsSecret123@prod-postgres.c1xyz2.rds.us-east-1.amazonaws.com:5432/production";

// JDBC Connection Strings
const JDBC_MYSQL = "jdbc:mysql://dbuser:dbpass123@localhost:3306/testdb?useSSL=false";
const JDBC_POSTGRES = "jdbc:postgresql://postgres:pgpass456@db-server:5432/mydb";
const JDBC_SQLSERVER = "jdbc:sqlserver://localhost:1433;databaseName=TestDB;username=testuser;password=testpass123;";
const JDBC_ORACLE = "jdbc:oracle:thin:system/oraclepass@localhost:1521:XE";

// MariaDB
const MARIADB_URI = "mariadb://mariauser:mariapass123@mariadb-server.com:3306/testdb";

// ClickHouse
const CLICKHOUSE_URI = "clickhouse://clickuser:clickpass@clickhouse.company.com:8123/analytics";

// FTP/SFTP (sometimes used for DB backups)
const FTP_URI = "ftp://ftpuser:ftppass123@backup-server.com:21/backups/";
const SFTP_URI = "sftp://backupuser:backuppass456@secure-backup.com:22/db-backups/";

// Database URLs with common ports
const DB_COMMON_PORTS = "mydb://user:pass@server:3306/db"; // MySQL port
const POSTGRES_PORT = "pgdb://admin:secret@host:5432/database"; // PostgreSQL port
const REDIS_PORT = "cache://user:pass@redis:6379/0"; // Redis port

// Azure Database Connections
const AZURE_SQL = "Server=myserver.database.windows.net;Database=mydb;User ID=azureuser;Password=AzurePass123;";
const AZURE_COSMOS = "AccountEndpoint=https://mycosmosdb.documents.azure.com:443/;AccountKey=dGVzdGtleWZvcnRlc3RpbmdwdXJwb3Nlc29ubHkxMjM0NTY3ODkw;";

// Environment Variables with DB URLs
const DATABASE_URL = "postgresql://herokuuser:herokupass@ec2-host.compute-1.amazonaws.com:5432/herokudb";
const DB_URL = "mysql://app:appsecret@db-cluster.internal:3306/appdb";
const CONNECTION_STRING = "mongodb://mongouser:mongopass@mongo-replica.internal:27017/prod";

// ==================== API KEYS & AUTHENTICATION TOKENS ====================

// AWS Credentials
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";
const AWS_ACCESS_KEY_2 = "ASIAIOSFODNN7EXAMPLE";
const AWS_ACCESS_KEY_3 = "ABIAIXYZOSFODNN7EXAM";
const AWS_ACCESS_KEY_4 = "ACCAIXYZOSFODNN7EXAM";

// GitHub Tokens
const GITHUB_PAT = "ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
const GITHUB_OAUTH = "gho_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
const GITHUB_APP_TOKEN = "ghu_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
const GITHUB_SERVER_TOKEN = "ghs_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

// Slack Tokens
const SLACK_BOT_TOKEN = "xoxb-1234567890-1234567890123-xxxxxxxxxxxxxxxxxxxx";
const SLACK_USER_TOKEN = "xoxp-1234567890-1234567890-1234567890-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
const SLACK_APP_TOKEN = "xapp-1-A01234567-1234567890-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

// OpenAI API Key
const OPENAI_API_KEY = "sk-xxxxxxxxxxxxxxxxxxT3BlbkFJxxxxxxxxxxxxxxxx";

// Stripe Keys
const STRIPE_SECRET_KEY = "sk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
const STRIPE_LIVE_KEY = "sk_live_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
const STRIPE_RESTRICTED_KEY = "rk_test_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

// SendGrid API Key
const SENDGRID_API_KEY = "SG.xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

// Twilio API Key  
const TWILIO_API_KEY = "SKxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

// Mailgun API Key
const MAILGUN_API_KEY = "key-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

// Generic API Keys
const API_KEY = "api_key=abcdef1234567890abcdef1234567890";
const ACCESS_TOKEN = "access_token=xyz123abc456def789ghi012jkl345mno";
const SECRET_TOKEN = "secret_token=secret_abc123def456ghi789jkl012mno345pqr";
const CLIENT_SECRET = "client_secret=client_secret_abcdef123456789012345678901234567890";

// JWT Tokens
const JWT_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

// Private Keys
const PRIVATE_KEY = `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC7VJTUt9Us8cKB
UMnV4wfuAiJCs1MsOTOOyT4OvT4fYXjLxsZT1RYDkIEhBGYzYD1XLFOYrwSjBWD
-----END PRIVATE KEY-----`;

// ==================== CONFIGURATION FILES ====================

// .env file example
const ENV_CONFIG = `
DATABASE_URL=postgresql://envuser:envpass@db.herokuapp.com:5432/envdb
REDIS_URL=redis://:redisenvpass@redis-env.com:6379/0
API_KEY=env_api_key_123456789012345678901234567890
SECRET_KEY=env_secret_key_abcdefghijklmnopqrstuvwxyz123456
JWT_SECRET=jwt_secret_super_long_random_string_for_testing_purposes_only
STRIPE_SECRET_KEY=sk_test_env_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
GITHUB_TOKEN=ghp_env_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
SLACK_BOT_TOKEN=xoxb-env-1234567890-1234567890123-xxxxxxxxxxxxxxxxxxxxxxx
`;

// config.json example
const CONFIG_JSON = {
  "database": {
    "host": "db.example.com",
    "port": 5432,
    "username": "configuser",
    "password": "configpass123",
    "database": "configdb",
    "url": "postgresql://configuser:configpass123@db.example.com:5432/configdb"
  },
  "redis": {
    "url": "redis://:redisconfigpass@redis.example.com:6379/0"
  },
  "api_keys": {
    "stripe": "sk_test_config_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "sendgrid": "SG.config_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "github": "ghp_config_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
  }
};

// ==================== DOCKER & YAML CONFIGURATIONS ====================

// docker-compose.yml example
const DOCKER_COMPOSE = `
version: '3.8'
services:
  db:
    image: postgres:13
    environment:
      POSTGRES_USER: dockeruser
      POSTGRES_PASSWORD: dockerpass123
      POSTGRES_DB: dockerdb
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:6
    command: redis-server --requirepass dockerredispass

  app:
    build: .
    environment:
      DATABASE_URL: postgresql://dockeruser:dockerpass123@db:5432/dockerdb
      REDIS_URL: redis://:dockerredispass@redis:6379/0
      API_KEY: docker_api_key_123456789012345678901234567890
`;

// k8s secret example
const K8S_SECRET = `
apiVersion: v1
kind: Secret
metadata:
  name: app-secrets
type: Opaque
stringData:
  database-url: "postgresql://k8suser:k8spass123@postgres-service:5432/k8sdb"
  redis-password: "k8sredispass123"
  api-key: "k8s_api_key_123456789012345678901234567890"
  github-token: "ghp_k8s_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
`;

// ==================== REAL-WORLD SCENARIOS ====================

// Connection strings in various formats that should be detected
const realWorldExamples = {
  // Environment variable assignments
  mongoEnv: 'export MONGO_URI="mongodb://produser:prod_mongo_pass_2023@prod-mongo-cluster.company.internal:27017/production_app"',
  
  // Configuration file entries
  configFile: 'db_connection_string = "mysql://webapp_user:webapp_secret_pass@mysql-master.internal.company.com:3306/webapp_production"',
  
  // Code comments (still sensitive!)
  codeComment: '// TODO: Replace with env var: postgresql://temp_user:temp_pass_delete_me@temp-db.staging.com:5432/temp_db',
  
  // SQL connection in application code
  sqlConnection: 'connectionString := "sqlserver://api_service:api_service_secret_2023@mssql-cluster.production.internal:1433/ApiServiceDB"',
  
  // Redis cache configuration
  redisConfig: 'CACHE_URL=redis://:cache_password_ultra_secure_2023@redis-cluster.prod.internal:6379/2',
  
  // Multi-line configuration
  multilineConfig: `
    database:
      primary: "postgresql://primary_user:primary_ultra_secret@primary-db.prod.company.com:5432/primary_production_db"
      replica: "postgresql://replica_user:replica_secure_pass@replica-db.prod.company.com:5432/replica_production_db"
  `,
  
  // URLs with query parameters
  mongoWithParams: 'mongodb://analytics_user:analytics_pass_2023@analytics-mongo.company.com:27017/analytics_db?retryWrites=true&w=majority&readPreference=secondary',
  
  // JDBC with multiple parameters
  jdbcFull: 'jdbc:postgresql://report_user:report_secret_key@reporting-db.company.internal:5432/reporting_production?ssl=true&sslmode=require&application_name=ReportingService'
};

// Export for testing
module.exports = {
  // Database connections
  MONGODB_URI, MONGODB_SRV, MYSQL_URI, POSTGRES_URI, REDIS_URI,
  ORACLE_URI, CASSANDRA_URI, NEO4J_URI, DOCUMENTDB_URI,
  
  // API Keys
  AWS_ACCESS_KEY_ID, GITHUB_PAT, SLACK_BOT_TOKEN, OPENAI_API_KEY,
  STRIPE_SECRET_KEY, SENDGRID_API_KEY, JWT_TOKEN,
  
  // Configuration examples
  ENV_CONFIG, CONFIG_JSON, DOCKER_COMPOSE, K8S_SECRET,
  
  // Real-world examples
  realWorldExamples
};

console.log("🔍 Test file loaded with dummy secrets for Gitleaks testing");
console.log("⚠️  These are FAKE credentials for testing purposes only!");
console.log("📊 Total patterns to detect:", Object.keys(module.exports).length);
