# Force x64 architecture for compatibility (even on ARM Macs)
FROM --platform=linux/amd64 cypress/included:14.1.0

WORKDIR /app

# Install dependencies (use --omit=dev if needed)
COPY package.json package-lock.json ./
RUN npm install

# Copy project files
COPY . .

# Set CORRECT binary path for x64 emulation
ENV CYPRESS_RUN_BINARY=/root/.cache/Cypress/14.1.0/Cypress/Cypress