# Install maildev

npm i -g maildev

# Start Server

maildev --outgoing-host smtp.gmail.com \
        --outgoing-secure \
        --outgoing-user 'demo@gmail.com' \
        --outgoing-pass 'pass' \
        --auto-relay \
        --auto-relay-rules /home/dylan/email/maildev/rule.json