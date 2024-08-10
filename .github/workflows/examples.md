### Uso de willcard pattern para captura de eventos por rama
```yml
on:
  push:
    branches:
      - 'feature/**-code-review'
```

### Uso de inputs con evento manual
```yml
on:
  workflow_dispatch:
    inputs:
      targetBrach:
        description: 'Branch to analyze. By default is develop'
        required: true
        default: 'develop'
        type: string
      logLevel:
        description: 'Log level'
        required: true
        default: 'warning'
        type: choice
        options:
        - info
        - warning
        - debug
      tags:
        description: 'Test scenario tags'
        required: false
        type: boolean
      environment:
        description: 'Environment to run tests against'
        type: environment
        required: true
```

### Checkout dinámico mediante input
```yml
- name: Checkout to repository
  uses: actions/checkout@v4
  with:
    ref: ${{ github.event_name == 'push' && github.ref || github.event.inputs.targetBrach || 'develop' }}
```

### Sonarqube
```yml
- name: Code Quality, Security and Static Analysis
  uses: SonarSource/sonarqube-scan-action@v2.3.0
  env:
    SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
    SONAR_HOST_URL: ${{ vars.SONAR_HOST_URL }}
  with:
    args: >
      -Dproject.settings=devops/sonar/sonar-project.properties
      -Dsonar.projectVersion=1.0

- name: SonarQube Quality Gate check
  id: sonarqube-quality-gate-check
  uses: sonarsource/sonarqube-quality-gate-action@master
  timeout-minutes: 5
  env:
    SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
    SONAR_HOST_URL: ${{ secrets.SONAR_HOST_URL }}

# Optionally you can use the output from the Quality Gate in another step.
# The possible outputs of the `quality-gate-status` variable are `PASSED`, `WARN` or `FAILED`.
- name: "Example show SonarQube Quality Gate Status value"
  run: echo "The Quality Gate status is ${{ steps.sonarqube-quality-gate-check.outputs.quality-gate-status }}"
```

## Sonarcloud
```yml
steps:
- name: SonarCloud Scan
  uses: SonarSource/sonarcloud-github-action@v2.3.0
  env:
    SONAR_TOKEN: ${{ secrets.SONAR_TOKEN }}
  with:
    args: >
      -Dproject.settings=devops/sonar/sonar-project.properties
      -Dsonar.organization=${{ env.SONAR_CLOUD_ORG }}
      -Dsonar.projectVersion=1.0

- name: Check Quality Gate status
  run: |
    status=$(curl -s -u ${{ secrets.SONAR_TOKEN }} "https://sonarcloud.io/api/qualitygates/project_status?projectKey=your_project_key" | jq -r .projectStatus.status)
    if [ "$status" != "OK" ]; then
      echo "Quality Gate failed: $status"
      exit 1
    fi
    echo "Quality Gate passed: $status"
```
