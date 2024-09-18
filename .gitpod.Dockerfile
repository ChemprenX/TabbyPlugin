# .gitpod.Dockerfile
FROM gitpod/workspace-full

# Install Apache, PHP 7.4, PHP 8.0, MySQL, Node.js, npm
RUN sudo apt-get update && \
    sudo apt-get install -y apache2 mysql-server php7.4-fpm php8.0-fpm php7.4-mysql php8.0-mysql nodejs npm && \
    sudo systemctl enable apache2 && \
    sudo systemctl enable mysql

# Install Android SDK and ADT
RUN sudo apt-get install -y default-jdk && \
    sudo apt-get install -y android-sdk && \
    sudo apt-get install -y adb && \
    sudo apt-get install -y gradle

# Set environment variables for Android SDK
ENV ANDROID_HOME=/usr/lib/android-sdk
ENV PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_HOME/platform-tools

# Start Apache and MySQL services
CMD ["/bin/bash", "-c", "sudo systemctl start apache2 && sudo systemctl start mysql && /bin/bash"]