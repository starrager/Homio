import prisma from '../prisma'
import cron from 'node-cron'

cron.schedule('*/30 * * * * *',async()=>{
    try{
        const now=new Date()
        const newOrders=await prisma.order.findMany({
            where:{
                status:'New',
                scheduledDate:{lte:now}
            }
        })

        for(const order of newOrders){
            await prisma.order.update({
                where:{id:order.id},
                data:{status:'IN_PROGRESS'}
            })

            await prisma.orderStatusHistory.create({
                data:{
                    orderId:order.id,
                    status:"IN_PROGRESS",
                    description:'заказ пришел в работу',
                    changedBy:'system'
                }
            })
        }

        const twoHoursAge=new Date(now.getTime()-2*60*60*1000)
        const inProgressOrders=await prisma.order.findMany({
            where:{
                status:'IN_PROGRESS',
                updatedAt:{lte:twoHoursAge}
            }
        })

        for(const order of inProgressOrders){
            await prisma.order.update({
                where:{id:order.id},
                data:{status:'COMPLETED'}
            })

            await prisma.orderStatusHistory.create({
                data:{
                    orderId:order.id,
                    status:"COMPLETED",
                    description:'заказ выполнен',
                    changedBy:'system'
                }
            })
        }
    }catch(error){
        console.error(error)
    }
})