# Force x64 architecture for Apple Silicon compatibility
FROM cypress/included:14.4.1

# Set working directory inside the container
WORKDIR /app

# Copy and install only necessary files first (for caching)
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the test project
COPY . .

# Run tests when container starts
CMD ["npx","cypress", "run"]


