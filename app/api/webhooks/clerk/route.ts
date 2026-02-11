// import prisma from '@/lib/prisma'
import { verifyWebhook } from '@clerk/nextjs/webhooks'
import { redirect } from 'next/navigation'
import { NextRequest } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const evt = await verifyWebhook(req)

    // Do something with payload
    // For this guide, log payload to console
    const { id } = evt.data
    const eventType = evt.type
    
    switch (eventType) {

        case 'user.created':
        //   const user = await prisma.user.create({
        //     data: {
        //       clerkId: evt.data.id,
        //       firstName: evt.data.first_name,
        //       lastName: evt.data.last_name,
        //       email: evt.data.email_addresses?.[0]?.email_address ?? '',
              
        //     },
        //   })
        //   console.log('User created:', user)
          break


        case 'user.updated':
        //  const userUpdated = await prisma.user.update({
        //   where: {
        //     clerkId: evt.data.id,
        //   },
        //   data: {
        //     firstName: evt.data.first_name,
        //     lastName: evt.data.last_name,
        //     email: evt.data.email_addresses?.[0]?.email_address ?? '',
        //   },
        // })
        // console.log('User updated:', userUpdated)
          break


        case 'user.deleted':
        //   await prisma.user.delete({
        //     where: {
        //       clerkId: evt.data.id,
        //     },
        //   })
          break


        case 'session.created':
          // TODO: handle session created
          break


        case 'session.ended':
          // TODO: handle session ended
          break


        case 'organization.created':
          // TODO: handle organization created
          break


        case 'organization.updated':
          // TODO: handle organization updated
          break


        case 'organization.deleted':
          // TODO: handle organization deleted
          break


        case 'organizationMembership.created':
          // TODO: handle membership created
          break


        case 'organizationMembership.updated':
          // TODO: handle membership updated
          break


        case 'organizationMembership.deleted':
          // TODO: handle membership deleted
          break

          
        default:
          console.log(`Unhandled webhook event: ${eventType}`, evt.data)
      }

    return new Response('Webhook received', { status: 200 })
  } catch (err) {
    console.error('Error verifying webhook:', err)
    return new Response('Error verifying webhook', { status: 400 })
  }
}