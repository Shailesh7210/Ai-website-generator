import { SidebarProvider } from '@/components/ui/sidebar';
import React from 'react'
import {AppSidebar} from './_components/AppSidebar';

const WorkspaceLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    
      <SidebarProvider>
        <AppSidebar/>
        <div className='w-full'>
      {children}
      </div>
      
      </SidebarProvider>
   
  )
}

export default WorkspaceLayout

