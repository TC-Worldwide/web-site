#!/bin/bash

# Exit on error
set -e

# Function to create a directory if it doesn't exist
create_directory() {
  if [ ! -d "$1" ]; then
    mkdir -p "$1"
    echo "Created directory: $1"
  fi
}

# Function to create a file if it doesn't exist
create_file() {
  if [ ! -f "$1" ]; then
    touch "$1"
    echo "Created file: $1"
  fi
}

# Function to rename old files not in the new structure
rename_old_files() {
  for file in $(find . -type f); do
    if [[ ! " ${NEW_FILES[*]} " =~ " ${file#./} " ]]; then
      mv "$file" "${file}_old"
      echo "Renamed old file: $file -> ${file}_old"
    fi
  done
}

# Directories to be created
DIRECTORIES=(
  "public"
  "public/assets/images"
  "public/assets/fonts"
  "public/assets/3d/portfolio_visuals"
  "src"
  "src/components/layout"
  "src/components/widgets"
  "src/contexts"
  "src/hooks"
  "src/pages"
  "src/styles/components"
  "src/utils"
  "tests/components"
  "tests/pages"
  "tests/utils"
  "Docker/nginx"
)

# Files to be created
FILES=(
  "public/index.html"
  "public/favicon.ico"
  "public/manifest.json"
  "public/assets/images/logo.png"
  "public/assets/images/background.jpg"
  "public/assets/images/icons/home.svg"
  "public/assets/images/icons/settings.svg"
  "public/assets/images/icons/analytics.svg"
  "public/assets/fonts/roboto.woff2"
  "public/assets/fonts/open-sans.woff2"
  "public/assets/3d/globe_model.glb"
  "public/assets/3d/charts.glb"
  "public/assets/3d/portfolio_visuals/bars.glb"
  "public/assets/3d/portfolio_visuals/pie_chart.glb"
  "src/components/layout/Header.tsx"
  "src/components/layout/Sidebar.tsx"
  "src/components/layout/Footer.tsx"
  "src/components/layout/FloatingPanel.tsx"
  "src/components/widgets/InvestmentSummary.tsx"
  "src/components/widgets/PortfolioPerformance.tsx"
  "src/components/widgets/WireTransferStatus.tsx"
  "src/components/widgets/RealTimeAnalytics.tsx"
  "src/components/InteractiveChart.tsx"
  "src/components/VirtualBoardroom.tsx"
  "src/contexts/AuthContext.tsx"
  "src/contexts/ThemeContext.tsx"
  "src/contexts/DataContext.tsx"
  "src/hooks/useAuth.ts"
  "src/hooks/useTheme.ts"
  "src/hooks/useFetch.ts"
  "src/pages/Dashboard.tsx"
  "src/pages/Login.tsx"
  "src/pages/Reports.tsx"
  "src/pages/Settings.tsx"
  "src/pages/Portfolio.tsx"
  "src/pages/MarketTrends.tsx"
  "src/styles/global.css"
  "src/styles/variables.css"
  "src/styles/components/Header.module.css"
  "src/styles/components/Sidebar.module.css"
  "src/styles/components/Widgets.module.css"
  "src/utils/api.ts"
  "src/utils/constants.ts"
  "src/utils/helpers.ts"
  "src/utils/chartUtils.ts"
  "src/App.tsx"
  "src/index.tsx"
  "src/react-app-env.d.ts"
  "src/reportWebVitals.ts"
  "tests/components/Sidebar.test.tsx"
  "tests/components/Header.test.tsx"
  "tests/components/Widgets.test.tsx"
  "tests/pages/Dashboard.test.tsx"
  "tests/pages/Login.test.tsx"
  "tests/pages/Reports.test.tsx"
  "tests/utils/api.test.ts"
  "tests/utils/helpers.test.ts"
  "README.md"
  "package.json"
  "tsconfig.json"
  ".env"
  ".gitignore"
  "LICENSE"
  "Docker/Dockerfile"
  "Docker/docker-compose.yml"
  "Docker/nginx/default.conf"
)

# Create directories
for dir in "${DIRECTORIES[@]}"; do
  create_directory "$dir"
done

# Create files
NEW_FILES=()
for file in "${FILES[@]}"; do
  create_file "$file"
  NEW_FILES+=("$file")
done

# Rename old files
rename_old_files

echo "Project structure setup completed successfully!"