cat fields.txt | sed -r ':a;N;$!ba;s/\n([a-zA-Z_^\:]+):([^\n]+)/ \1,/g' | sed -e 's/,[[:blank:]]*$//g' | awk '{table=$1; $1="";gsub(/ /, "", $0);  print table":""\""$0"\","}'

