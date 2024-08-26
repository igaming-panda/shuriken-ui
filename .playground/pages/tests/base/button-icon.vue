<script setup lang="ts">
definePageMeta({
  title: 'BaseButtonIcon',
  icon: 'system-uicons:plus-circle',
  description: 'Button icon component',
  section: 'base',
})
</script>

<template>
  <div>
    <NuiPreviewContainer title="BaseButtonIcon">
      <NuiPreview title="Radius" description="Button icon component radiuses">
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none"></BaseButtonIcon>
          <BaseButtonIcon rounded="sm"></BaseButtonIcon>
          <BaseButtonIcon rounded="md"></BaseButtonIcon>
          <BaseButtonIcon rounded="lg"></BaseButtonIcon>
          <BaseButtonIcon rounded="full"></BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview title="Size" description="Button icon component sizes">
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon size="sm" rounded="md"></BaseButtonIcon>
          <BaseButtonIcon size="md" rounded="md"></BaseButtonIcon>
          <BaseButtonIcon size="lg" rounded="md"></BaseButtonIcon>
          <BaseButtonIcon size="xl" rounded="md"></BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: default"
        description="Button icon component default color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="default"></BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="default"></BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="default"></BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="default"></BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="default"></BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: muted"
        description="Button icon component muted color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="muted"></BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="muted"></BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="muted"></BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="muted"></BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="muted"></BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: primary"
        description="Button icon component primary color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="primary"></BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="primary"></BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="primary"></BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="primary"></BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="primary"></BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: info"
        description="Button icon component info color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="info"></BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="info"></BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="info"></BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="info"></BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="info"></BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: success"
        description="Button icon component success color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="success"></BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="success"></BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="success"></BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="success"></BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="success"></BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: warning"
        description="Button icon component warning color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="warning"></BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="warning"></BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="warning"></BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="warning"></BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="warning"></BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: danger"
        description="Button icon component danger color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="danger"></BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="danger"></BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="danger"></BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="danger"></BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="danger"></BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: light"
        description="Button icon component light color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="light"></BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="light"></BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="light"></BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="light"></BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="light"></BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: dark"
        description="Button icon component dark color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="dark"></BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="dark"></BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="dark"></BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="dark"></BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="dark"></BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Color: black"
        description="Button icon component black color"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" color="black"></BaseButtonIcon>
          <BaseButtonIcon rounded="sm" color="black"></BaseButtonIcon>
          <BaseButtonIcon rounded="md" color="black"></BaseButtonIcon>
          <BaseButtonIcon rounded="lg" color="black"></BaseButtonIcon>
          <BaseButtonIcon rounded="full" color="black"></BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="State: loading"
        description="Button icon component in loading state"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" loading></BaseButtonIcon>
          <BaseButtonIcon rounded="sm" loading></BaseButtonIcon>
          <BaseButtonIcon rounded="md" loading></BaseButtonIcon>
          <BaseButtonIcon rounded="lg" loading></BaseButtonIcon>
          <BaseButtonIcon rounded="full" loading></BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="State: disabled"
        description="Button icon component in disabled state"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonIcon rounded="none" disabled></BaseButtonIcon>
          <BaseButtonIcon rounded="sm" disabled></BaseButtonIcon>
          <BaseButtonIcon rounded="md" disabled></BaseButtonIcon>
          <BaseButtonIcon rounded="lg" disabled></BaseButtonIcon>
          <BaseButtonIcon rounded="full" disabled></BaseButtonIcon>
        </div>
      </NuiPreview>

      <NuiPreview
        title="Group"
        description="Button icon component inside a group"
      >
        <div class="flex flex-wrap items-end gap-2">
          <BaseButtonGroup>
            <BaseButtonIcon rounded="md" color="default"></BaseButtonIcon>
            <BaseButtonIcon rounded="md" color="default"></BaseButtonIcon>
            <BaseButtonIcon rounded="md" color="default"></BaseButtonIcon>
            <BaseButtonIcon rounded="md" color="default"></BaseButtonIcon>
            <BaseButtonIcon rounded="md" color="default"></BaseButtonIcon>
          </BaseButtonGroup>
        </div>
      </NuiPreview>
    </NuiPreviewContainer>
  </div>
</template>
