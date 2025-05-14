"use strict";
const data = [
  {
    id: "C1",
    name: "Chocolate Truffles",
    rrp: "12.99",
    info: "Luxurious dark chocolate truffles with a velvety center."
  },
  {
    id: "C2",
    name: "Gummy Bears",
    rrp: "3.49",
    info: "Classic fruit-flavored gummy treats in fun bear shapes."
  },
];

export default async function (fastify) {
  fastify.get("/", async function (request, reply) {
    return data;
  })
}