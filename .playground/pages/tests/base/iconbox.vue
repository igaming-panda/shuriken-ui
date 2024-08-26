<script setup lang="ts">
definePageMeta({
  title: 'BaseIconBox',
  icon: 'system-uicons:nut',
  description: 'Icon box component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseIconBox">
      <NuiPreview
        title="Rounded: full"
        description="Icon box component full radiuses"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseIconBox
            size="xs"
            rounded="full"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="sm"
            rounded="full"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="md"
            rounded="full"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="xl"
            rounded="full"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="2xl"
            rounded="full"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: lg"
        description="Icon box component lg radiuses"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseIconBox
            size="xs"
            rounded="lg"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="sm"
            rounded="lg"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="md"
            rounded="lg"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="lg"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="xl"
            rounded="lg"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="2xl"
            rounded="lg"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: md"
        description="Icon box component md radiuses"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseIconBox
            size="xs"
            rounded="md"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="sm"
            rounded="md"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="md"
            rounded="md"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="md"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="xl"
            rounded="md"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="2xl"
            rounded="md"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: sm"
        description="Icon box component sm radiuses"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseIconBox
            size="xs"
            rounded="sm"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="sm"
            rounded="sm"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="md"
            rounded="sm"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="sm"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="xl"
            rounded="sm"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="2xl"
            rounded="sm"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Rounded: none"
        description="Icon box component none radiuses"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseIconBox
            size="xs"
            rounded="none"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="sm"
            rounded="none"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="md"
            rounded="none"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="xl"
            rounded="none"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
          <BaseIconBox
            size="2xl"
            rounded="none"
            class="bg-muted-200 text-muted-500 dark:bg-muted-800"
          ></BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: solid"
        description="Icon box component solid variant"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="solid"
            color="default"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="solid"
            color="primary"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="solid"
            color="info"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="solid"
            color="success"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="solid"
            color="warning"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="solid"
            color="danger"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="solid"
            color="light"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="solid"
            color="dark"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="solid"
            color="black"
          ></BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: pastel"
        description="Icon box component pastel variant"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="pastel"
            color="default"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="pastel"
            color="primary"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="pastel"
            color="info"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="pastel"
            color="success"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="pastel"
            color="warning"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="pastel"
            color="danger"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="pastel"
            color="light"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="pastel"
            color="dark"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="pastel"
            color="black"
          ></BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Variant: outline"
        description="Icon box component outline variant"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="outline"
            color="default"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="outline"
            color="primary"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="outline"
            color="info"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="outline"
            color="success"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="outline"
            color="warning"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="outline"
            color="danger"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="outline"
            color="light"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="outline"
            color="dark"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="full"
            variant="outline"
            color="black"
          ></BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview title="Mask: hex" description="Icon box component hex mask">
        <div class="flex flex-wrap items-end gap-4">
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hex"
            color="default"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hex"
            color="primary"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hex"
            color="info"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hex"
            color="success"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hex"
            color="warning"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hex"
            color="danger"
          ></BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Mask: hexed"
        description="Icon box component hexed mask"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hexed"
            color="default"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hexed"
            color="primary"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hexed"
            color="info"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hexed"
            color="success"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hexed"
            color="warning"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="hexed"
            color="danger"
          ></BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview title="Mask: blob" description="Icon box component blob mask">
        <div class="flex flex-wrap items-end gap-4">
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="blob"
            color="default"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="blob"
            color="primary"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="blob"
            color="info"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="blob"
            color="success"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="blob"
            color="warning"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="blob"
            color="danger"
          ></BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview title="Mask: deca" description="Icon box component deca mask">
        <div class="flex flex-wrap items-end gap-4">
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="deca"
            color="default"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="deca"
            color="primary"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="deca"
            color="info"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="deca"
            color="success"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="deca"
            color="warning"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="deca"
            color="danger"
          ></BaseIconBox>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Mask: diamond"
        description="Icon box component diamond mask"
      >
        <div class="flex flex-wrap items-end gap-4">
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="diamond"
            color="default"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="diamond"
            color="primary"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="diamond"
            color="info"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="diamond"
            color="success"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="diamond"
            color="warning"
          ></BaseIconBox>
          <BaseIconBox
            size="lg"
            rounded="none"
            variant="solid"
            mask="diamond"
            color="danger"
          ></BaseIconBox>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
