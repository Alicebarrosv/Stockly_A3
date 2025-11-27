

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


const repoName = 'Stockly'; 


export default defineConfig({
  
  base: `/${repoName}/`, 
  

  plugins: [react()],
});
