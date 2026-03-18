"use client"

import { Button, ButtonGroup, Heading, Steps, Text, useSteps, VStack } from "@chakra-ui/react";
import { LuArrowLeft } from "react-icons/lu";

export default function Agendar() {
  const steps = useSteps({
    defaultStep: 1,
    count: items.length,
  });

  return (
    <VStack as="main" gap={0}>
      <VStack w="100vw" as="section" pt={28} pb={16} px={6}>
        <Button variant="ghost" rounded="lg" asChild>
          <a href="/">
            <LuArrowLeft />
            Inicio
          </a>
        </Button>

        <Heading as="h1" fontSize="4xl">Agendar Serviço</Heading>
        <Text>Passo 1 de 3</Text>

        <Steps.RootProvider value={steps}>
          <Steps.List>
            {items.map((step, index) => (
              <Steps.Item key={index} index={index} title={step.title}>
                <Steps.Indicator />
                <Steps.Title>{step.title}</Steps.Title>
                <Steps.Separator />
              </Steps.Item>
            ))}
          </Steps.List>
          {items.map((step, index) => (
            <Steps.Content key={index} index={index}>
              {step.description}
            </Steps.Content>
          ))}
          <Steps.CompletedContent>All steps are complete!</Steps.CompletedContent>

          <ButtonGroup size="sm" variant="outline">
            <Steps.PrevTrigger asChild>
              <Button>Prev</Button>
            </Steps.PrevTrigger>
            <Steps.NextTrigger asChild>
              <Button>Next</Button>
            </Steps.NextTrigger>
          </ButtonGroup>
        </Steps.RootProvider>
      </VStack>
    </VStack>
  )
}

const items = [
  {
    title: "Step 1",
    description: "Step 1 description",
  },
  {
    title: "Step 2",
    description: "Step 2 description",
  },
  {
    title: "Step 3",
    description: "Step 3 description",
  },
]