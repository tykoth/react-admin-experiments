# Create resource 'Todo'

#mkdir -p resources/$plural

esshconfig=`cat <<EOE

Host $host
        HostName $host
        Port $port
        StrictHostKeyChecking no 
        UserKnownHostsFile /dev/null
        LogLevel QUIET
EOE
`

